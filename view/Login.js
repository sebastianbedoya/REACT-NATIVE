import React from 'react';
import { StyleSheet,ImageBackground, Text, View , ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Send_user from "../components/login/Send_user"
import Send_pass from "../components/login/Send_pass"
import Buton_retrieve from "../components/login/buton_retrieve"
import Buton_login from "../components/login/Buton_login";

const Login = () =>{

    return (
        <View  style={styles.view} >
          
            <ImageBackground  source={require("../assets/fondo_login.jpg")}  style={{ width: 400, height: 700, marginBottom: 10 }} >
            <Text style={styles.text} >you cook </Text>
            <Text style={styles.text1}>usuario</Text>
            <Send_user/>
            <Text style={styles.text1}>contraseña</Text>
            <Send_pass/>
            <Buton_login/>
            <Buton_retrieve/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
      flex:1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    text: {
        color: "white",
        fontSize: 70,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom:50 ,
        paddingTop: 30
      },
      text1: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginStart: 30
        }
  }
);

export default Login;