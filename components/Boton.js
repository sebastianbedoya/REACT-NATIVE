import React from 'react';
import { StyleSheet,Button, Text, View , TouchableOpacity, TextInput , Image ,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Boton(){

    const navigation = useNavigation();

     return(
         <TouchableOpacity onPress ={()=> navigation.navigate("Vista2") }>
             <View>
                 <Text  style={styles.text1} >login</Text>
             </View>
         </TouchableOpacity>
     )
} 

const styles = StyleSheet.create({
      text1: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        marginStart: 30 , 
        backgroundColor: "black",
        marginEnd: 30,
        marginStart: 30 

        }
  }
  );