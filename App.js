  
import gunter from "./assets/gunter.png"
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View , TouchableOpacity, TextInput , Image ,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from  "./view/Home";


 export default function App(){
   return(
     <Home/>
   )
 }


