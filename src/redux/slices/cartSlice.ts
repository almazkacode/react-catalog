import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  count: number;
}

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

const calculateTotalPrice = (items: CartItem[]) => {
  return items.reduce((acc, item) => acc + item.price * item.count, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (!findItem) {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = calculateTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<{ id: number }>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = calculateTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    updateItemCount(state, action: PayloadAction<{ id: number; delta: number }>) {
      const { id, delta } = action.payload;
      const findItem = state.items.find((obj) => obj.id === id);

      if (findItem) {
        if (findItem.count + delta <= 0) {
          state.items = state.items.filter((obj) => obj.id !== id);
        } else {
          findItem.count += delta;
        }
      }

      state.totalPrice = calculateTotalPrice(state.items);
    },
  },
});

export const cartTotalPriceSelector = (state: RootState) => state.cart.totalPrice;
export const cartItemsSelector = (state: RootState) => state.cart.items;

export const { addItem, removeItem, clearItems, updateItemCount } = cartSlice.actions;

export default cartSlice.reducer;
