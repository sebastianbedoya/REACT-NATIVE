import React from 'react';
import { View, Image, StyleSheet , Text ,ScrollView } from 'react-native';



const Information = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text} > publiciaciones </Text>
    <Text style={styles.text} > seguidores  </Text>
    <Text style={styles.text} > sigues </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection:'row' 
  },

});
export default Information;