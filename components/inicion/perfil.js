import React from 'react';
import { Text } from 'react-native';
import { View, Image, StyleSheet } from 'react-native';



const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.imganen} source={require('../../assets/gunter.png')}/>
      <Text> sebastian bedoya medina </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection:'row' 
  },
  imganen: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10 
  }
});
export default DisplayAnImage;