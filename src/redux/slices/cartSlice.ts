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
  totalCount: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

const calculateTotalPriceAndCount = (items: CartItem[]) => {
  return {
    totalPrice: parseFloat(
      items.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2),
    ),
    totalCount: items.reduce((sum, item) => sum + item.count, 0),
  };
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
    },
    removeItem(state, action: PayloadAction<{ id: number }>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
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
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.startsWith('cart/'),
      (state) => {
        const { totalPrice, totalCount } = calculateTotalPriceAndCount(state.items);
        state.totalPrice = totalPrice;
        state.totalCount = totalCount;
      },
    );
  },
});

export const cartItemsSelector = (state: RootState) => state.cart.items;
export const cartSelector = (state: RootState) => state.cart;

export const { addItem, removeItem, clearItems, updateItemCount } = cartSlice.actions;

export default cartSlice.reducer;
