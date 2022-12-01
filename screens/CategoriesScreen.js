import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import MealsOverviewScreen from './MealsOverviewScreen';



//navigation special prop from react-navigation package
function CategoriesScreen({ navigation }) {
  //optional helper function to keep JSX code leaner in CategoriesScreen function
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen;

//navigate() method provided by react-navigation package through navigation prop
//pass in name of page as argument as string 