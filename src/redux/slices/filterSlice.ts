import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FilterSliceState {
  searchValue: string;
  category: string;
}

const initialState: FilterSliceState = {
  searchValue: '',
  category: 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategories(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    clearFilters(state) {
      state.searchValue = '';
      state.category = 'all';
    },
  },
});

export const filterSelector = (state: RootState) => state.filter;

export const { setSearchValue, setCategories, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
