import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {
  //logic used to manage context - manage favorite meals ids
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  //update based on previous state
  function addFavorite(id){
    setFavoriteMealIds((currentFaveIds) => [...currentFaveIds, id]);
  }

  function removeFavorite(id){
    setFavoriteMealIds((currentFaveIds) => currentFaveIds.filter(mealId => mealId !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;