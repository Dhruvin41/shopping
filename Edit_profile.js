import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Edit_profile = ({navigation}) => {

  const [getid , setGetid] = useState('')
  // const [getid , setGetid] = useState('')




const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@userid')
    if(value !== null) {
      // value previously stored
      console.log(value)
      setGetid(value)
    }
  } catch(e) {
    // error reading value
  }
}

useEffect(() => {
  getData()
console.log('edit profile')
// console.log(value)
 
}, [])

useEffect(() => {
  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},

  
  };

  
  fetch('http://192.168.1.109:3000/data_id?_id='+getid, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
 
}, [getid])




  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [number, setNumber] = useState('');
  // const [password, setPassword] = useState('');

  const btnBack = () => {
    // Alert.alert('sd')
    navigation.navigate('Profile');
  };
  // const [detail, setDetail] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({ }),
    };
    fetch('http://192.168.1.74:3000/login_data', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setDetail(data.data);
      });
  }, []);

  const btnUpdate = () => {
    // Alert.alert('dfkj');

    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},

      //body: JSON.stringify({quantity:quantity}),
    };
    fetch(
      'http://192.168.1.74:3000/update_profile?p_id=' +
        updateID +
        '&name=' +
        name +
        '&email=' +
        email +
        '&number=' +
        number +
        '&password=' +
        password,
      requestOptions,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // setProducts(data.data);
      });
  };

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => btnBack()}>
          <Image
            style={styles.header_icon}
            source={require('./image/back.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.header_icon}
            source={require('./image/share.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
        <View>
          <Image style={styles.img} source={require('./image/man.png')}></Image>
        </View>
        <TouchableOpacity style={styles.profile_name_view}>
          <Text style={[styles.profile_name, {}]}>Change Picture</Text>
        </TouchableOpacity>

        
              <View style={{margin: 15}}>
                <View>
                  <Text>UserName</Text>
                  <TextInput
                    // value={name}
                    onChangeText={data => setName(data)}
                    style={{
                      paddingLeft:20,
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                    }}></TextInput>
                </View>
                <View style={{marginTop: 10}}>
                  <Text>Email i'd</Text>
                  <TextInput
                    // value={email}  
                    onChangeText={data => setEmail(data)}
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                    }}></TextInput>
                </View>

                <View style={{marginTop: 10}}>
                  <Text>Phone Number</Text>
                  <TextInput
                    // value={number}
                    onChangeText={data => setNumber(data)}
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                    }}></TextInput>
                </View>
                <View style={{marginTop: 10}}>
                  <Text>Password</Text>
                  <TextInput
                    // value={password}
                    onChangeText={data => setPassword(data)}
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop: 10,
                    }}></TextInput>
                </View>
                <TouchableOpacity
                  onPress={() => btnUpdate(item._id)}
                  style={{
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      backgroundColor: '#FF8D76',
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      fontWeight: '800',
                      borderRadius: 10,
                    }}>
                    Update
                  </Text>
                </TouchableOpacity>
              </View>
           
      </View>
    </View>
  );
};

export default Edit_profile;

const styles = StyleSheet.create({
  header_icon: {
    height: 25,
    width: 25,
  },
  header: {
    height: 60,
    width: '100%',
    elevation: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  top: {
    height: 150,
    width: '100%',
    backgroundColor: '#FF8D76',
  },
  img: {
    height: 120,
    width: 120,

    alignSelf: 'center',
    marginTop: 90,

    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 70,
  },
  profile_name: {
    textAlign: 'center',
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    // backgroundColor: '#FF8D76',
    marginHorizontal: 120,
    padding: 10,
    borderRadius: 10,
    // color: '#fff',
    // justifyContent:'center'
  },
  profile_name_view: {
    marginTop: 15,
  },
});
