import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter, IFormFilds } from 'types';
type FormState = {
  cardsForm: ICharacter[];
  formFilds: IFormFilds;
};
const initialState: FormState = {
  cardsForm: [],
  formFilds: { name: '', date: '', status: '', switch: false, check: false },
};
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    createCardForm(state, action: PayloadAction<ICharacter>) {
      console.log('state', state);
      console.log('action', action);
      state.cardsForm.push(action.payload);
    },
    getFormFilds(state, action: PayloadAction<IFormFilds>) {
      console.log('state', state);
      console.log('action', action);
      state.formFilds = action.payload;
    },
  },
});
export const { createCardForm, getFormFilds } = formSlice.actions;
export default formSlice.reducer;
