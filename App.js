import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

//Stack is an object w/ two properties where every property holds an object that acts as a component
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'Categories'
            }} />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
          // options={({route, navigation}) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,
          //   };
          // }} 
          />
          <Stack.Screen
            name='MealDetails'
            component={MealDetailsScreen}
            options={{
              // headerRight: () => {
              //   return (
              //     <Button title='Tap me!' />
              //   )
              // },
              title: 'Details'
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});


//register screens using stack.screen
//Can rearrange order of stack.screen to set default screen
//alternatively there is also and initialRouteName prop that can be set to the navigator component
//<Stack.Navigator initialRouteName='MealsCategories'>.......</Stack.Navigator>

//add custom title with options prop