import React from 'react';
import { View, Image, StyleSheet , Text ,ScrollView } from 'react-native';


import  BotonCompra from './botonesCompra/BotonCompra'
const Publicaciones = () => {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <Image style={styles.imganen} source={require('../../assets/comida1.jpg')} ></Image>
    <Text style={styles.text}>nombre de la comida</Text>
    <Text style={styles.text}>pequeña descripcion sobre que es la comida </Text>
    <Text style={styles.text}> precio $302</Text>
    <Image style={styles.imganen} source={require('../../assets/comida2.jpg')} ></Image>
    <Text style={styles.text}>nombre de la comida</Text>
    <Text style={styles.text}>pequeña descripcion sobre que es la comida </Text>
    <Text style={styles.text}> precio $302</Text>
    <Image style={styles.imganen} source={require('../../assets/comida3.jpg')} ></Image>
    <Text style={styles.text}>nombre de la comida</Text>
    <Text style={styles.text}>pequeña descripcion sobre que es la comida </Text>
    <Text style={styles.text}> precio $302</Text>
    <Image style={styles.imganen} source={require('../../assets/comida3.jpg')} ></Image>
    <Text style={styles.text}>nombre de la comida</Text>
    <Text style={styles.text}>pequeña descripcion sobre que es la comida </Text>
    <Text style={styles.text}> precio $302</Text>
    </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  text: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 10 ,
    paddingTop: 10,
    borderWidth: 1,
  },
  imganen: {
    width: 310,
    height: 90,
    borderWidth: 1,
    marginHorizontal: 10 ,
  }

});
export default Publicaciones;