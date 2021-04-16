import React from 'react';
import { StyleSheet,Button,ImageBackground , Text, View , TouchableOpacity, TextInput , Image ,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Register_pass from "../components/registrar/register_pass"
import Register_user from "../components/registrar/register_user"
import Register_age from "../components/registrar/register_age"
import Register_mail from "../components/registrar/register_mail"
import Boton from "../components/registrar/Boton"



const Registrar = () =>{

    return (
    <View  style={styles.view}  >  
     <ImageBackground source={require("../assets/fondo.jpg")}  style={{ width: 400, height: 700, marginBottom: 10 }} >
        <Text style={styles.text}  > register </Text>
        <Text style={styles.text1} >usuerio</Text>
        <Register_user />
        <Text style={styles.text1}>contraseña</Text>
        <Register_pass/>
        <Text style={styles.text1} >correo</Text>
        <Register_mail/>
        <Text style={styles.text1} >edad</Text>
        <Register_age/>
        <Boton ></Boton>
        </ImageBackground>
    </View>
    )
}


const styles = StyleSheet.create({
    view: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      
      }, 
      text: {
        color: "white",
        fontSize: 70,
        fontWeight: "bold",
        textAlign: "center",
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

export default Registrar;