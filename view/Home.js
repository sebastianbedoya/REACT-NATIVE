import React from 'react';
import { StyleSheet,Button, Text, View , TouchableOpacity, TextInput , Image ,Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



import Login from "./Login"
import Registrar from "./Registrar"
import Perfil from "./profile"
import Inicio from "./Inicio"

const Drawer = createDrawerNavigator();



export default function Home(){

  return(
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="You cook" component={Login} />
      <Drawer.Screen name="registrar" component={Registrar} />
      <Drawer.Screen name="perfil" component={Perfil} />
      <Drawer.Screen name="inicion" component={Inicio} />
    </Drawer.Navigator>
    </NavigationContainer>
  )
} 