import React from 'react';

import { StyleSheet,Button, Text, View , TouchableOpacity, TextInput , Image ,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from '../../view/Login';


export default function Boton(){

    const navigation = useNavigation();

     return(
         <TouchableOpacity onPress ={()=> navigation.navigate("Inicio") }>
             <View>
                 <Text  style={styles.text1} >Login</Text>
             </View>
         </TouchableOpacity>
     )
} 

const styles = StyleSheet.create({
      text1: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginStart: 30 , 
        marginEnd: 30,
        marginStart: 30 ,
        marginBottom: 50

        }
  }
  );