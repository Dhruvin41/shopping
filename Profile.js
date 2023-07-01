import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({route, navigation}) => {
  // const {pofile_id} = route.params;

  const [getid, setGetid] = useState('');

  const btnEdit = () => {
    // Alert.alert('')
    navigation.navigate('Edit_profile');
  };

  const btnUpdate = () => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},

      //body: JSON.stringify({quantity:quantity}),
    };
    fetch(
      'http://192.168.1.74:3000/update_profile?_id=' +
        getid +
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

    Alert.alert('');
  };


  // useEffect(() => {
  //   deleteUserKey();
  // }, [])
  

  const btnLogout = () => {
    // Alert.alert('gdgdg')
    deleteUserKey();

    // if (!getid) {
    //   console.log('hiiii')
    //   setGetid('')
    // } else {
    //   Alert.alert('jnj')
   
    // }

  
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@userid');
      if (value !== null) {
        // value previously stored
        console.log(value);
        setGetid(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
    // console.log(getData)
    // console.log(value)
  }, []);


  deleteUserKey = async () => {
    try {
      await AsyncStorage.removeItem('@userid');
    } catch (e) {
      // remove error
    }
    // deleteUserKey();
    navigation.navigate('Login' ,{del: getid} );
    console.log('Done.');
  };
  
  // const [products, setProducts] = useState([]);

  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (getid != '') {
      const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      };
      fetch('http://192.168.29.131:3000/data_id?_id=' + getid, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data.data[0].name);
          setName(data.data[0].name);
          // console.log("setName",setName(data.data[0].name));
          setEmail(data.data[0].email);
          setNumber(data.data[0].number);
          setPassword(data.data[0].password);
        });
    }
  }, [getid]);

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => btnBack()}>
          <Image
            style={styles.header_icon}
            source={require('./image/back.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => btnLogout()}>
          <Image
            style={styles.header_icon}
            source={require('./image/power-off.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
        <View>
          <Image style={styles.img} source={require('./image/man.png')}></Image>
        </View>
        <TouchableOpacity style={styles.profile_name_view}>
          <Text style={[styles.profile_name, {}]}>Change Picture</Text>
          <Text></Text>
        </TouchableOpacity>

        <View style={{margin: 15, height: '100%'}}>
          <View>
            <Text>UserName</Text>
            <TextInput
              // value={name}
              onChangeText={data => setName(data)}
              style={{
                paddingLeft: 20,
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
              }}>
              {name}
            </TextInput>
          </View>
          <View style={{marginTop: 10}}>
            <Text>Email i'd</Text>
            <TextInput
              // value={email}
              onChangeText={data => setEmail(data)}
              style={{
                paddingLeft: 20,
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
              }}>
              {email}
            </TextInput>
          </View>

          <View style={{marginTop: 10}}>
            <Text>Phone Number</Text>
            <TextInput
              // value={number}
              onChangeText={data => setNumber(data)}
              style={{
                paddingLeft: 20,
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
              }}>
              {number}
            </TextInput>
          </View>
          <View style={{marginTop: 10}}>
            <Text>Password</Text>
            <TextInput
              // value={password}
              onChangeText={data => setPassword(data)}
              style={{
                paddingLeft: 20,

                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
              }}>
              {password}
            </TextInput>
          </View>
          <TouchableOpacity
            onPress={() => btnUpdate()}
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

  // return (
  //   <View>
  //     <View style={styles.header}>
  //       <TouchableOpacity>
  //         <Image
  //           style={styles.header_icon}
  //           source={require('./image/back.png')}></Image>
  //       </TouchableOpacity>
  //       <TouchableOpacity>
  //         <Image
  //           style={styles.header_icon}
  //           source={require('./image/bell.png')}></Image>
  //       </TouchableOpacity>
  //     </View>
  //     <View style={styles.top}>
  //       <View>
  //         <Image style={styles.img} source={require('./image/man.png')}></Image>
  //       </View>
  //       <TouchableOpacity style={styles.profile_name_view} onPress={()=>btnEdit()}>
  //         <Text style={[styles.profile_name, {}]}>Edit Profiles</Text>
  //       </TouchableOpacity>
  //       <View style={{backgroundColor: '#B8B8B8', marginTop: 10}}>
  //         <Text
  //           style={{
  //             fontWeight: '800',
  //             paddingHorizontal: 15,
  //             paddingVertical: 5,
  //             letterSpacing: 0.5,
  //           }}>
  //           Mini Headline
  //         </Text>
  //       </View>
  //       <View style={{}}>
  //         <TouchableOpacity style={[styles.text, {marginTop: 10}]}>
  //           <Text>Popular</Text>
  //           <Image
  //             style={{height: 25, width: 25}}
  //             source={require('./image/right-chevron.png')}></Image>
  //         </TouchableOpacity>

  //         <TouchableOpacity style={styles.text}>
  //           <Text>Treading</Text>
  //           <Image
  //             style={{height: 25, width: 25}}
  //             source={require('./image/right-chevron.png')}></Image>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.text}>
  //           <Text>Today</Text>
  //           <Image
  //             style={{height: 25, width: 25}}
  //             source={require('./image/right-chevron.png')}></Image>
  //         </TouchableOpacity>
  //       </View>
  //       <View style={{backgroundColor: '#B8B8B8', marginTop: 10}}>
  //         <Text
  //           style={{
  //             fontWeight: '800',
  //             paddingHorizontal: 15,
  //             paddingVertical: 5,
  //             letterSpacing: 0.5,
  //           }}>
  //           Content
  //         </Text>
  //       </View>
  //       <TouchableOpacity
  //         style={{marginTop: 10, paddingHorizontal: 15, paddingVertical: 3}}>
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //             // backgroundColor: 'red',
  //           }}>
  //           <View style={{flexDirection: 'row'}}>
  //             <Image
  //               style={{height: 25, width: 25}}
  //               source={require('./image/heart.png')}></Image>
  //             <Text style={{paddingLeft: 10}}>Favourite</Text>
  //           </View>
  //           <Image
  //             style={{height: 25, width: 25}}
  //             source={require('./image/right-chevron.png')}></Image>
  //         </View>

  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );
};

export default Profile;

const styles = StyleSheet.create({
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
  img_outline: {
    // borderWidth:1
  },
  profile_name: {
    textAlign: 'center',
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    backgroundColor: '#FF8D76',
    marginHorizontal: 120,
    padding: 10,
    borderRadius: 10,
    color: '#fff',
    // justifyContent:'center'
  },
  profile_name_view: {
    marginTop: 15,
  },
  text: {
    fontWeight: '500',

    paddingHorizontal: 15,
    paddingVertical: 3,
    letterSpacing: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header_icon: {
    height: 25,
    width: 25,
  },
});
