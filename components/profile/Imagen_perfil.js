import React from 'react';
import { View, Image, StyleSheet } from 'react-native';



const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imganen}
        source={require('../../assets/gunter.png')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  imganen: {
    width: 90,
    height: 90,
    borderWidth: 2,
    borderRadius: 60
  }
});
export default DisplayAnImage;