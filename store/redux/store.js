import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favorites';

export const store = configureStore({
  //different slices of state and actions that can change data
  reducer: {
    favoriteMeals: favoritesReducer
  }
});