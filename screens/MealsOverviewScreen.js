import { useLayoutEffect } from 'react';
import Mealslist from '../components/MealsList/MealsList';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
  //get id of category passed through navigation to this screen
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  //execute some side effect while still happening before component rendered 
  //run simultaneously
  //title renders smoother 
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    //takes all props
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
 
  return <Mealslist items={displayedMeals}/>

}

export default MealsOverviewScreen;



//alternatively utilized useRoute if need access to currently load route info in some nested component not registered as a screen
