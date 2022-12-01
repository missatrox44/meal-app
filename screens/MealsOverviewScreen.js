import { View, FlatList, StyleSheet, Text } from 'react-native';
// import { FlatList } from 'react-native-web';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route }) {
  //get id of category passed through navigation to this screen
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration
    }

    return (
      <MealItem {...mealItemProps} />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item => item.id)}
        renderItem={renderMealItem} />
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})

//alternatively utilized useRoute if need access to currently load route info in some nested component not registered as a screen
