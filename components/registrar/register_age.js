import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UselessTextInput = () => {
    const [text, onChangeText] = React.useState("");
  
    return (
      <SafeAreaView >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="- age"
        />
      </SafeAreaView>
    );
  };
  
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      marginBottom: 30 ,
      marginEnd: 30,
      marginStart: 30

    }
  });

  export default UselessTextInput;