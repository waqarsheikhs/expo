import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function ManagerLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <View style={styles.container}>
      <TextInput style = {styles.heading} > MANAGER LOGIN</TextInput>
      <TextInput
        placeholder='email'
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}>
      </TextInput>
      <TextInput
        placeholder='password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input} >
      </TextInput>

      <TouchableOpacity style={styles.submit}>
        <Text style={styles.submit_text}  >LOGIN</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'grey',
    color: 'white',
    width: '90%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10
  },
  submit: {
    backgroundColor: 'green',
    color: 'white',
    width: '90%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  submit_text: {
    color: 'white',
    textAlign: 'center'
  },
  heading: {
    color : 'green',
    fontSize: 40,
    fontWeight: 'bold'
  },
  register: {
    
  },
  register_text:{
    color: 'green',
    fontWeight:'bold'
  },
  manager_text: {
    color: 'green',
    fontWeight:'bold',
    marginBottom : 'auto',
    marginTop : 0
  },


});