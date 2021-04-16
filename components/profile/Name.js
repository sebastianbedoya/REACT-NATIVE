import React from 'react';
import { View, Image, StyleSheet , Text } from 'react-native';



const Information = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text} > sebastian bedoya medina </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
export default Information;