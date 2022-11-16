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
      state.cardsForm.push(action.payload);
    },
    getFormFilds(state, action: PayloadAction<IFormFilds>) {
      const newFilds = { ...action.payload };
      newFilds.img = undefined;
      state.formFilds = newFilds;
    },
  },
});
export const { createCardForm, getFormFilds } = formSlice.actions;
export default formSlice.reducer;
