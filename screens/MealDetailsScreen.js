import { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailsScreen({ route, navigation }) {
  //useContext hook 
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  //boolean
  //check if id is in favoriteMeals array
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  //way to interact with component
  //doesnt need to be here
  //how to generally add items to a header such as button
  function changeFavoriteStatusHandler() {
   //toggle favorite status
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton 
        //conditionally render icon if favorite
        icon={mealIsFavorite ? 'star' : 'star-outline'} 
        color='white' 
        onPress={changeFavoriteStatusHandler} />
      }
    })
  }, [navigation, changeFavoriteStatusHandler]);
  
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>


    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'purple'
  },
  detailText: {
    color: 'purple'
  },
  listContainer: {
    width: '80%'
  },
  listOuterContainer: {
    alignItems: 'center'
  }
})