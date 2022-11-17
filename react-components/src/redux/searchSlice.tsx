import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ICharacter } from 'types';
import { sortingData } from '../utils';
type searchState = {
  searchQuery: string;
  searchResults: Required<ICharacter>[];
  typeSorting: string;
  currentPosition: number | null;
  page: number;
  lastPage: number;
  out: number;
  count: number;
  loading: boolean;
  error: null | string;
};
const initialState: searchState = {
  searchQuery: '',
  searchResults: [],
  count: 0,
  typeSorting: '',
  currentPosition: null,
  page: 1,
  lastPage: 1,
  out: 20,
  loading: false,
  error: null,
};

type Tresponse = {
  info?: {
    count: number;
    pages: number;
  };
  results?: Required<ICharacter>[];
  error?: string;
};

const BASE_PATH = 'https://rickandmortyapi.com/api/character/';
const SEARCH_PARAM = 'name=';
const PAGE_PARAM = 'page=';

export const fetchSearchResults = createAsyncThunk<
  Tresponse,
  undefined,
  { rejectValue: string; state: { search: searchState } }
>('search/fetchSearchResults', async function (_, { getState }) {
  const searchQuery = getState().search.searchQuery;
  const out = getState().search.out;
  const page = getState().search.page;
  const query = searchQuery ? `&${SEARCH_PARAM}${searchQuery}` : '';
  let pageQuery;
  if (out === 20) pageQuery = Number(page);
  if (out === 10 && Number(page) % 2 === 0) pageQuery = Number(page) / 2;
  if (out === 10 && Number(page) % 2 !== 0) pageQuery = (Number(page) + 1) / 2;

  const response = await fetch(`${BASE_PATH}?${PAGE_PARAM}${pageQuery}${query}`);
  const data = await response.json();

  return data;
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setLastPageNumber(state, action: PayloadAction<number>) {
      state.lastPage = action.payload;
    },
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    setTypeSorting(state, action: PayloadAction<string>) {
      state.typeSorting = action.payload;
    },
    setCurrentPosition(state, action: PayloadAction<number | null>) {
      state.currentPosition = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    changeOut(state, action: PayloadAction<number>) {
      state.out = action.payload;
    },
  },
  extraReducers: (bilder) => {
    bilder.addCase(fetchSearchResults.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    bilder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.searchResults = [];
      }
      if (action.payload.info) {
        state.lastPage = action.payload.info.pages;
        state.count = action.payload.info.count;
      }
      if (action.payload.results) {
        const result =
          state.out === 20
            ? [...action.payload.results]
            : Number(state.page) % 2 === 0
            ? action.payload.results.slice(10)
            : action.payload.results.slice(0, 10);
        state.searchResults = sortingData(result, state.typeSorting);
      }
    });
    bilder.addCase(fetchSearchResults.rejected, (state) => {
      state.loading = false;
      state.searchResults = [];
    });
  },
});
export const {
  changeSearchQuery,
  setLastPageNumber,
  setCount,
  setTypeSorting,
  setCurrentPosition,
  setCurrentPage,
  changeOut,
} = searchSlice.actions;
export default searchSlice.reducer;
