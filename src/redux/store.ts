import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import products from './slices/productsSlice';
import cart from './slices/cartSlice';
import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    products,
    cart,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
