//create slice - defining state, data and actions able to change data

import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: []
  },
  //functions used to change state:
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    }
  }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;

//every method defined as reduce will automatically get latest state as input
//with redux toolkit, can mutate state in mutable way (under the hood)

//action parameter can hold extra payload, can be passed along when invoking method later