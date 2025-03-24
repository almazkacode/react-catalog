import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FilterSliceState {
  searchValue: string;
}

const initialState: FilterSliceState = {
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const filterSelector = (state: RootState) => state.filter;

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
