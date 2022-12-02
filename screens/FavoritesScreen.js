import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Mealslist from '../components/MealsList/MealsList';
// import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

import { useSelector } from 'react-redux';


function FavoritesScreen() {
  //need to get favorite meals from ids array
  //CONTEXT API
  //  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

  //get all meals from raw data, check if id matches favorite mealsId array, if true then return new array
  const favoriteMeals = MEALS.filter(meal =>
    //CONTEXT API
    // favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );

  //create logic to render no favorites message
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          Womp womp womp.....
        </Text>
        <Text style={styles.text}>
          You have no favorite meals yet.
        </Text>
      </View>
    )
  }

  return (
    <Mealslist items={favoriteMeals} />
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})