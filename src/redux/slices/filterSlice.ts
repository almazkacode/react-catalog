import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FilterSliceState {
  searchValue: string;
  category: string;
  minPrice: number;
  maxPrice: number;
}

const initialState: FilterSliceState = {
  searchValue: '',
  category: 'all',
  minPrice: 0,
  maxPrice: 1000,
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
    setPriceRange(state, action: PayloadAction<{ minPrice: number; maxPrice: number }>) {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
    clearFilters(state) {
      state.searchValue = '';
      state.category = 'all';
      state.minPrice = 0;
      state.maxPrice = 1000;
    },
  },
});

export const filterSelector = (state: RootState) => state.filter;

export const { setSearchValue, setCategories, setPriceRange, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
