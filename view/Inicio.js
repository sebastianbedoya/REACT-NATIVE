import React from 'react';
import { StyleSheet,Button, Text, View , TouchableOpacity, TextInput , Image ,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native';


import Publicaciones from "../components/inicion/Publicaciones"

const Inicio = () =>{

    return (
        <View style={styles.view}>
         
          <Text  style={styles.text} > publicaciones</Text>
          <Publicaciones/>
        </View>
    )
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 20,
    flex:3,
    backgroundColor: '#E6FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  text:{
      color:'black'
  }
}
);

export default Inicio;