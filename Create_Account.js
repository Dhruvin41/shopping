import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const Create_Account = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    // Alert.alert('dlld')

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},

      body: JSON.stringify({
        name: name,
        email: email,
        // title: title,
        number: number,
        password: password,

        // brand: brand,
      }),
    };
    fetch('http://192.168.1.74:3000/account', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));

    navigation.navigate('Login');
  };

  return (
    <View style={{margin: 20}}>
      <TextInput
        placeholder="username"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={data => setName(data)}
        placeholderTextColor={'grey'}
        style={{fontSize: 20}}></TextInput>
      <View
        style={{
          backgroundColor: '#000',
          width: '100%',
          borderWidth: 1,
          marginTop: 5,
          marginBottom: 20,
        }}></View>

      <TextInput
        placeholder="email"
        placeholderTextColor={'grey'}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={data => setEmail(data)}
        style={{fontSize: 20}}></TextInput>
      <View
        style={{
          backgroundColor: '#000',
          width: '100%',
          borderWidth: 1,
          marginTop: 5,
          marginBottom: 20,
        }}></View>

      <TextInput
        placeholder="mobile no."
        placeholderTextColor={'grey'}
        keyboardType="numeric"
        value={number}
        onChangeText={data => setNumber(data)}
        style={{fontSize: 20}}></TextInput>
      <View
        style={{
          backgroundColor: '#000',
          width: '100%',
          borderWidth: 1,
          marginTop: 5,
          marginBottom: 20,
        }}></View>

      <TextInput
        placeholder="password"
        placeholderTextColor={'grey'}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={data => setPassword(data)}
        style={{fontSize: 20}}></TextInput>
      <View
        style={{
          backgroundColor: '#000',
          width: '100%',
          borderWidth: 1,
          marginTop: 5,
          marginBottom: 20,
        }}></View>

      <View>
        <TouchableOpacity style={[styles.btn]} onPress={() => submit()}>
          <Text style={styles.btnText}> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Create_Account;

const styles = StyleSheet.create({
  btn: {
    textAlign: 'center',
    margin: 10,
    marginTop: 30,
    backgroundColor: 'gray',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: '#fff',
  },
});
