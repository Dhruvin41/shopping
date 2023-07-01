import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  Text,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Screen1({route, navigation}) {
  const {p_id} = route.params;

  useEffect(() => {
    console.log('screen1 ', p_id);
    // console.log('pname ', pname);

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
  }, []);

  // const btnCart = () => {
  //   Alert.alert('fnndjfj')
  // }

  const [cart , setCart] = useState([]);

  const btnWishlist = () => {
    Alert.alert('sdkkjk')
  }

  const btnCart = ()=>{
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ })
  };
    fetch("http://192.168.29.131:3000/add_cart?p_id=" + p_id,requestOptions)
    .then(response => response.json())
    .then(data => {console.log(data);
        Alert.alert('Product Added in Cart')
      
      // Alert.alert('Product Added in Cart')
      // if (cart_data == cart_data) {
      //   Alert.alert('your product is already added')
      // }
      // else{
      //   Alert.alert('Product Added in Cart')
      // }
      
    });
   
  }

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({ p_id:p_id }),
    };
    fetch('http://192.168.29.131:3000/search?p_id=' + p_id, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setProducts(data.data);
      });
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{margin: 10}}>
          {/* <Text style={{}}>{p_id}</Text> */}
          {/* <Text style={{}}>{p_id.brand}</Text> */}
          {products.map(p_id => {
            return (
              <>
                {/* <TouchableOpacity></TouchableOpacity> */}
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={{uri: p_id.p_img}}
                    style={{
                      height: 300,
                      width: 300,
                      borderRadius: 10,
                      resizeMode: 'center',
                    }}></Image>
                </View>
                <View style={{marginTop: 10, marginLeft: 20 ,}}>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: 'bold',
                      color: '#000',
                      textTransform: 'capitalize',
                      textAlign: 'center',
                    }}>
                    {p_id.p_name}
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // backgroundColor:'red',
                    alignItems:'center'
                  }}>
                  <View style={{}}>
                    <Text
                      style={{fontSize: 30, color: '#000', fontWeight: '500'}}>
                      £{p_id.price}
                    </Text>
                  </View>

                  <View
                    style={{justifyContent: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity onPress={()=>btnWishlist()} style={{alignItems: 'center', marginHorizontal: 10}}>
                      <Image
                        source={require('./image/heart.png')}
                        style={{
                          height: 30,
                          width: 30,
                          tintColor: '#000',
                        }}></Image>
                      <Text style={{color: '#000', fontWeight: '600'}}>
                        Wishlist
                      </Text>
                    </TouchableOpacity>
                    <View style={{alignItems: 'center'}}>
                      <Image
                        source={require('./image/share.png')}
                        style={{
                          height: 30,
                          width: 30,
                          tintColor: '#000',
                        }}></Image>
                      <Text style={{color: '#000', fontWeight: '600'}}>
                        Share
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={{fontSize: 20, color: '#000'}}>
                    {p_id.brand}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#E1E2E2',
                    marginTop: 20,
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize:15, color: '#000', padding: 10}}>
                    {' '}
                    {p_id.description}
                  </Text>
                </View>
                {/* <Text>{p_id.description}</Text> */}
              </>
            );
          })}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 100,
          }}>
          <TouchableOpacity onPress={() => btnCart()}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              padding: 20,
              borderRadius: 10,
              width:'45%'
            }}>
            <Image
              source={require('./image/shopping-cart.png')}
              style={{
                height: 30,
                width: 30,

                tintColor: '#000',
              }}></Image>
            <Text style={{marginLeft: 5, fontSize: 20, color: '#000'}}>
              Add to Cart
            </Text>
          </TouchableOpacity>
          <View style={{width:'45%'}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                padding: 20,
                backgroundColor: '#FF69B4',
                borderRadius: 10,
              }}>
              <Image
                source={require('./image/right-chevron.png')}
                style={{
                  height: 30,
                  width: 30,

                  tintColor: '#000',
                }}></Image>
              <Text style={{marginLeft: 5, fontSize: 20, color: '#000'}}>
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  categorieshome: {
    flexDirection: 'row',
    // flex: 1
    // justifyContent: 'center',
    // alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E1E2E2',
    margin: 5,
  },
  containerbottom: {
    margin: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 1,
    width: '100%',
    // borderTopEndRadius:30,
    // borderBottomLeftRadius:20,
    // borderBottomRightRadius: 30,
    // borderBottomStartRadius: 30,
    borderRadius: 10,
    height: 80,
    textAlign: 'center',
    backgroundColor: '#363837',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Screen1;
