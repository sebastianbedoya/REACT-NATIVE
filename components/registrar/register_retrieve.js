import React from 'react';

import { StyleSheet,Button, Text, View , TouchableOpacity, TextInput , Image ,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Boton(){

    const navigation = useNavigation();

     return(
         <TouchableOpacity onPress ={()=> navigation.navigate("Vista2") }>
             <View>
                 <Text>recuperar cuenta</Text>
             </View>
         </TouchableOpacity>
     )
} 