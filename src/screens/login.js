import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword, auth } from '../../config/firebase';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState('')


  const login = () => {
    console.log(email,'email')
    console.log(password,'password')
    console.log(auth)
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setLoading(false)
        console.log('ssssss',res)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err,'eeeeeeeeeeee')
      })
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.heading} > LOGIN </TextInput>
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

      <TouchableOpacity onPress={login} style={styles.submit}>
        <Text style={styles.submit_text} >LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('REGISTER')} style={styles.register}>
        <Text style={styles.register_text} >Register Now</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('MANAGER')}
        style={styles.manager}>
        <Text style={styles.manager_text} >Manager Login</Text>
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
    color: 'green',
    fontSize: 40,
    fontWeight: 'bold'
  },
  register: {

  },
  register_text: {
    color: 'green',
    fontWeight: 'bold'
  },
  manager_text: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 'auto',
    marginTop: 0
  },


});