import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Cart({route, navigation}) {
  // const {p_id} = route.params;

  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({ }),
    };
    fetch('http:/192.168.29.131:3000/select_cart', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setProducts(data.data);
      });
  }, []);

  // const [p_delete, setDelete] = useState([]);

  const btndelete = p_delete => {
    //Alert.alert(p_delete)

    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({ })
    };
    fetch('http://192.168.29.131:3000/delete?p_id=' + p_delete, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          // body: JSON.stringify({ }),
        };
        fetch('http://192.168.29.131:3000/select_cart', requestOptions)
          .then(response => response.json())
          .then(data => {
            setProducts(data.data);
          });
      });
  };

  const [quantity, setQuantity] = useState([]);
  // const [quantity, setQuantity] = useState(1);

  // var cnt = 0
  const btnPlus = index => {
    const newItems = [...quantity];
    newItems[index] = newItems[index] + 1;
    setQuantity(newItems);
    // this.setState({ items:newItems });
    // if (quantity < 10) {
    //   setQuantity(quantity + 1);
    // } else {
    //   setQuantity(10);
    // }
    // Alert.alert('+');
    // setQuantity(quantity  + 1)
  };

  const btnMinus = index => {
    const newItems = [...quantity];
    newItems[index] = newItems[index] - 1;
    setQuantity(newItems);
    // setQuantity(quantity  - 1)
    //quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const btnupdate = (updateID, ind) => {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},

      //body: JSON.stringify({quantity:quantity}),
    };
    fetch(
      'http://192.168.1.74:3000/update?p_id=' +
        updateID +
        '&quantity=' +
        quantity[ind],
      requestOptions,
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        Alert.alert('fjj ' + updateID);
        // setProducts(data.data);
      });
  };



  useEffect(() => {
    var temp = [];
    for (var i = 0; i < products.length; i++) {
      // console.log(products[i])
      var qty = products[i].quantity ? products[i].quantity : 1;
      temp.push(qty);
    }
    //console.log(temp)
    setQuantity(temp);
  }, [products]);




  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              marginTop: 10,
              marginHorizontal: 10,
              marginBottom: 100,
            }}>
            {products.map((item, ind) => {
              return (
                <>
                  <View
                    key={item._id}
                    style={{
                      backgroundColor: '#f8f9fb',
                      marginVertical: 15,
                      borderRadius: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View style={{}}>
                        <Image
                          source={{uri: item.p_img}}
                          style={{
                            height: 150,
                            width: 150,
                            borderRadius: 10,
                            resizeMode: 'center',
                          }}></Image>
                      </View>
                      <View style={{marginLeft: 20}}>
                        <Text style={{color: '#000', marginTop: 10}}>
                          {item.description}
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 25,
                            fontWeight: 'bold',
                          }}>
                          ₹ {item.price}
                        </Text>
                        <Text style={{color: '#595a5c', marginTop: 5}}>
                          Eligible for Free Shipping
                        </Text>
                        <Text
                          style={{
                            color: '#2f8735',
                            fontWeight: '600',
                            marginVertical: 5,
                          }}>
                          in stock
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{fontWeight: 'bold'}}>Brand : </Text>
                          <Text style={{color: '#000', fontSize: 15}}>
                            {item.brand}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            // backgroundColor: 'grey',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <TouchableOpacity
                            style={{}}
                            onPress={() => btnPlus(ind)}>
                            <Text style={{fontSize: 30}}>+</Text>
                          </TouchableOpacity>
                          <TextInput
                            editable={false}
                            style={{
                              // borderWidth: 1,
                              // height:0,
                              fontSize: 20,
                              textAlign: 'center',
                              marginHorizontal: 10,
                              color: 'black',
                            }}>
                            {quantity[ind]}
                          </TextInput>
                          <TouchableOpacity onPress={() => btnMinus(ind)}>
                            <Text style={{fontSize: 30}}>-</Text>
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                          onPress={() => btnupdate(item._id, ind)}
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              textTransform: 'uppercase',
                              padding: 5,
                              borderWidth: 1,
                              borderRadius: 5,
                              textAlign: 'center',
                            }}>
                            update
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity
                        onPress={() => btndelete(item._id)}
                        style={{
                          borderWidth: 2,
                          width: '30%',
                          borderRadius: 10,
                        }}>
                        <Text
                          style={{
                            paddingHorizontal: 25,
                            paddingVertical: 8,
                            textAlign: 'center',
                          }}>
                          Delete
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          borderWidth: 2,
                          width: '30%',
                          borderRadius: 10,
                        }}>
                        <Text
                          style={{
                            paddingHorizontal: 25,
                            paddingVertical: 8,
                            textAlign: 'center',
                          }}>
                          Buy Now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* <View>
                  <View style={{flexWrap: 'wrap'}}>
                    <Image
                      source={{uri: item.p_img}}
                      style={{
                        height: 100,
                        width: 100,
                        borderRadius: 10,
                        resizeMode: 'center',
                      }}></Image>
                  </View>
                  <View>
                    <Text>{item.p_name}</Text>
                  </View>
                </View> */}
                  {/* <Text>{item.p_name}</Text> */}
                </>
              );
            })}
          </View>
        </ScrollView>

        <View style={styles.containerbottom}>
          <View style={styles.bottomView}>
            <View style={{}}>
              <Pressable>
                <Image
                  source={require('./image/home.png')}
                  style={{height: 30, width: 30, tintColor: '#ffffff'}}></Image>
                <Text style={{color: '#ffffff'}}>home</Text>
              </Pressable>
            </View>

            <View style={{}}>
              <Pressable>
                <Image
                  source={require('./image/shopping-bag.png')}
                  style={{height: 30, width: 30, tintColor: '#ffffff'}}></Image>
                <Text style={{color: '#ffffff'}}>order</Text>
              </Pressable>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Pressable>
                <Image
                  source={require('./image/user.png')}
                  style={{height: 30, width: 30, tintColor: '#ffffff'}}></Image>
                <Text style={{color: '#ffffff'}}>profile</Text>
              </Pressable>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Pressable>
                <Image
                  source={require('./image/shopping-cart.png')}
                  style={{height: 30, width: 30, tintColor: '#BA7650'}}></Image>
                <Text style={{color: '#BA7650'}}>cart</Text>
              </Pressable>
            </View>
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
export default Cart;
