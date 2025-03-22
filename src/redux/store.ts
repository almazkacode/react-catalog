import { configureStore } from '@reduxjs/toolkit';
import products from './slices/productsSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
