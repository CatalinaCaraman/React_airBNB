import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/cardsSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
