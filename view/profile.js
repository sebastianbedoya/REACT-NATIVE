import React from 'react';
import { StyleSheet,Button, Text, View , TouchableOpacity, TextInput , Image ,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Imagen from "../components/profile/Imagen_perfil"
import Name from '../components/profile/Name';
import Seguidores from '../components/profile/Seguidores'
import Seguidores_cantidad from '../components/profile/Seguidores_cantidad'
import Publicaciones from '../components/profile/Publicaciones'


const Perfil = () =>{

    return (
        <View  style={styles.view}>
            <Imagen/>
            <Name/>
            <Seguidores/>
            <Seguidores_cantidad/>
            <Publicaciones/>
        </View>
    )
}

const styles = StyleSheet.create({
  view: {
    flex:1,
    backgroundColor: '#E6FFFF',
    alignItems: 'center'/* centro entre derecha y izquierda */
    
  }, 
  text:{
      color:'white'
  }
}
);

export default Perfil;