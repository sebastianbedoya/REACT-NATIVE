import React from 'react';
import { View, Image, StyleSheet , Text } from 'react-native';



const Information = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text} >30 </Text>
    <Text style={styles.text} >              50 </Text>
    <Text style={styles.text} >              50 </Text>
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