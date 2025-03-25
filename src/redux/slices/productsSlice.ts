import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export interface ProductItemInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface ProductsSliceState {
  items: ProductItemInterface[];
  status: Status;
}

const initialState: ProductsSliceState = {
  items: [],
  status: Status.LOADING,
};

export const fetchProducts = createAsyncThunk<ProductItemInterface[], void, { state: RootState }>(
  'products/fetchProducts',
  async (_, { getState }) => {
    const state = getState();

    if (state.products.items.length) return state.products.items;

    const { data } = await axios.get<ProductItemInterface[]>('https://fakestoreapi.com/products');
    return data;
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ProductItemInterface[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductItemInterface[]>) => {
        if (action.payload) {
          state.status = Status.SUCCESS;
          state.items = action.payload;
        }
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const productsSelector = (state: RootState) => state.products;

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
