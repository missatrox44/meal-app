import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId

  return (
    <View>
      <Text>Details of Meal({mealId})</Text>
    </View>
  )
}

export default MealDetailsScreen;