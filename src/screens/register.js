import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword, auth, db, doc, setDoc } from '../../config/firebase';


export default function Register({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [cnic, setCNIC] = useState('')
  const [dob, setDob] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [familyMember, setFamilyMember] = useState('')

  const register = () => {
    console.log(email, password, name, cnic, dob, fatherName, familyMember)
    let Data = {
      email, password, name, cnic, dob, fatherName, familyMember
    }
    console.log('dd',Data)
    createUserWithEmailAndPassword(auth, email, password)
      .then( async (res) => {
        console.log('res', res.user.uid)
        let dbRef = doc(db, "users", res.user.uid);
        await setDoc(dbRef, { ...Data, uid: res.user.uid })
          .then(() => {
            console.log('res')
          })
      })
      .catch((err) => {
        console.log("masla agaya==>", err)
      })

  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.heading} > REGISTER</TextInput>
      <TextInput
        placeholder='Name'
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}>
      </TextInput>
      <TextInput
        placeholder='Father Name'
        value={fatherName}
        onChangeText={(text) => setFatherName(text)}
        style={styles.input}>
      </TextInput>
      <TextInput
        placeholder='CNIC'
        value={cnic}
        onChangeText={(text) => setCNIC(text)}
        style={styles.input}>
      </TextInput>
      <TextInput
        placeholder='Date Of Birth'
        value={dob}
        onChangeText={(text) => setDob(text)}
        style={styles.input}>
      </TextInput>
      <TextInput
        placeholder='No Of Family Member'
        value={familyMember}
        onChangeText={(text) => setFamilyMember(text)}
        style={styles.input}>
      </TextInput>
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

      <TouchableOpacity onPress={register} style={styles.submit}>
        <Text style={styles.submit_text}>REGISTER</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LOGIN')} style={styles.register}>
        <Text style={styles.register_text} >Login Now</Text>
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