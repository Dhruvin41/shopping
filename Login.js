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
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({route, navigation}) => {
  const {del} = route.params;

  console.log('delete ', del);




  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  navigation.setOptions({
    // title: pname,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#E1E2E2',
      
    },
    
    headerTintColor: '#000000',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
    },
  });



  // const [agree, setAgree] = useState(false);

  const btnlogin = () => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},

      body: JSON.stringify({email: email, password: password}),
    };
    fetch('http://192.168.29.131:3000/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status == 'success') {
          storeData(data.data[0]._id);

          // navigation.navigate('Profile', {pofile_id: item._id});
        }
      });
    navigation.navigate('Home');

  };

  const storeData = async value => {
    try {
      console.log('Recieved ID = ', value);
      await AsyncStorage.setItem('@userid', value);
    } catch (e) {
      // saving error
    }
  };

  return (
    <>
      <ScrollView style={{height: '100%', backgroundColor: '#fff'}}>
        <View style={styles.mainContainer}>
          {/* <ImageBackground source={require('./image/logo.png')}></ImageBackground> */}
          <Image
            // source={require('./image/logo.png')}
            style={{
              height: 100,
              width: 100,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />

          <Text style={styles.mainHeader}>Login </Text>
          {/* <Text style={styles.mainHeader}>{myName} </Text> */}

          <View style={styles.inputContainer}>
            <Text style={styles.labels}> Enter Your Email </Text>

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={data => setEmail(data)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}> Enter Password </Text>

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={password}
              onChangeText={data => setPassword(data)}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              {/* <CheckBox
                  value={agree}
                  onValueChange={() => setAgree(!agree)}
                  color={agree ? '#4630eb' : undefined}
                /> */}

              <TouchableOpacity onPress={() => btnCreate()}>
                <Text
                  style={{
                    paddingLeft: 20,
                    fontWeight: 'bold',
                    color: '#4630eb',
                    textDecorationLine: 'underline',
                  }}>
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => btnlogin()}
              style={[
                styles.btn,
                // {backgroundColor: agree ? '#4630ed' : 'grey'},
              ]}>
              <Text style={styles.btnText}> Login </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <Text>{myName}</Text> */}
      </ScrollView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  mainHeader: {
    textAlign: 'center',
    fontSize: 30,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 4,
    fontSize: 18,
  },
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
  checkbox: {
    alignSelf: 'center',
  },
  label: {},
});
