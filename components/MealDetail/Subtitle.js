import { Text, View, StyleSheet } from 'react-native';

//make text configurable by using props
function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: 'brown',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: 'brown',
    borderBottomWidth: 2,
  }
})