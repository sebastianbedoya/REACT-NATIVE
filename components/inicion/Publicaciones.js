import React from 'react';
import { View, Image, StyleSheet , Text ,ScrollView } from 'react-native';
import Perfil from "./perfil"
const Publicaciones = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
    <Perfil/>
    <Image style={styles.imganen} source={require('../../assets/comida1.jpg')} ></Image>
    <Text style={styles.text}>nombre de la comida</Text>
    <Text style={styles.text}>pequeña descripcion sobre que es la comida </Text>
    <Text style={styles.text}> precio $302</Text>
    <Perfil/>
    <Image style={styles.imganen} source={require('../../assets/comida2.jpg')} ></Image>
    <Text style={styles.text}>nombre de la comida</Text>
    <Text style={styles.text}>pequeña descripcion sobre que es la comida </Text>
    <Text style={styles.text}> precio $302</Text>
    <Perfil/>
    <Image style={styles.imganen} source={require('../../assets/comida3.jpg')} ></Image>
    <Text style={styles.text}>nombre de la comida</Text>
    <Text style={styles.text}>pequeña descripcion sobre que es la comida </Text>
    <Text style={styles.text}> precio $302</Text>
    <Perfil/>
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
    paddingTop: 10,

  },
  text: {
    color: "#000000",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 10 ,
    
  },
  imganen: {
    width: 310,
    height: 90,
    borderWidth: 1,
    marginHorizontal: 10 ,
  },

});
export default Publicaciones;