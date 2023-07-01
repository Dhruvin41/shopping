import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';

function Home({ route, navigation }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ }),
    };
    fetch('http://192.168.29.131:3000/select', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setProducts(data.data);
      });
  }, []);


  const onTap = (item) => {
    // Alert.alert(ind)
    console.log()
    navigation.navigate('Screen1' , {p_id: item._id});
  }

  //   const categories = [
  //     {
  //       pname: 'Dairy',
  //       pimg: require('./image/Dairy/d1.png'),
  //     },
  //     {
  //       pname: 'Vagetables',
  //       pimg: require('./image/Vagetables/v1.png'),
  //     },
  //     {
  //       pname: 'Fruits',
  //       pimg: require('./image/Fruits/f1.png'),
  //     },
  //     {
  //       pname: 'Non-vag',
  //       pimg: require('./image/Non-vag/n1.png'),
  //     },
  //     {
  //       pname: 'Cap & Bag',
  //       pimg: require('./image/Cap&Bag/c1.png'),
  //     },
  //     {
  //       pname: 'Protein',
  //       pimg: require('./image/Protein/p1.png'),
  //     },
  //     {
  //       pname: 'Oil & Masalas',
  //       pimg: require('./image/product_7.png'),
  //     },
  //     {
  //       pname: 'Pooja',
  //       pimg: require('./image/product_8.png'),
  //     },
  //     {
  //       pname: 'Baby Care',
  //       pimg: require('./image/product_9.png'),
  //     },
  //     {
  //       pname: 'Beauty',
  //       pimg: require('./image/product_10.png'),
  //     },
  //     {
  //       pname: 'Cleaning',
  //       pimg: require('./image/product_11.png'),
  //     },
  //     {
  //       pname: 'Pet Care',
  //       pimg: require('./image/product_12.png'),
  //     },
  //   ];

  const cateClick = item => {
    console.log(item);
    navigation.navigate('Screen1', {
      index: item,
      pname: categories[item].pname,
    });
    // console.log(pname)
  };

  const btnOrder = () => {
    navigation.navigate('Order');
  };
  const btnCart = () => {
    navigation.navigate('Cart');
  };

  const btnShow_profile = () => {
    navigation.navigate('Profile');

  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 50, margin: 10 }}>

                    <View style={{ flex: 4, backgroundColor: '#E1E2E2', height: 50, borderTopStartRadius: 5, borderBottomStartRadius: 5 }}>
                        <TextInput placeholder="Search for products" style={{}}></TextInput>
                    </View>

                    <View style={{ flex: 1, backgroundColor: '#4FB269', height: 50, alignItems: 'center', borderTopEndRadius: 5, borderBottomEndRadius: 5, justifyContent: 'center' }}>
                        <Image source={require('./image/search.png')} style={{ height: 25, width: 25, margin: 10, tintColor: '#ffffff' }}></Image>
                    </View>
                </View> */}

        {/* <TextInput style={{backgroundColor:'red'}}></TextInput> */}
        <ScrollView>
          <View style={{ margin: 10, flex: 1 }}>
            <View style={{ margin: 10 }}>
              <Image
                resizeMode="contain"
                source={require('./image/ad1.jpeg')}
                style={{ height: 250, width: '100%' }}></Image>
            </View>

            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 30, color: '#000000' }}>Categories</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: 100,
              }}>
              {products.map(item => {
                return (
                  <>
                  {/* <TouchableOpacity></TouchableOpacity> */}
                    <TouchableOpacity
                      style={{
                        margin: 7,
                        backgroundColor: '#E1E2E2',
                        borderRadius: 20,
                        width: '45%',
                        borderWidth: 2,
                        borderColor: '#808080 ',

                        //   flexDirection: 'row',
                        // height: '30%',
                      }} onPress={() => {onTap(item)}}>
                      <View
                        style={{
                          // width: '40%',
                          margin: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={{ uri: item.p_img }}
                          style={{
                            height: 100,
                            width: 100,
                            borderRadius: 10,
                            resizeMode: 'center',
                          }}></Image>
                      </View>

                      <View style={{}}>
                        <Text style={styles.display}>{item.p_name}</Text>
                        <Text
                          style={[
                            styles.display,
                            {
                              textDecorationLine: 'underline',
                              fontWeight: 'bold',
                            },
                          ]}>
                          RS :- {item.price}
                        </Text>
                        <Text style={styles.display}>{item.brand}</Text>
                        <Text style={[styles.display, { marginVertical: 5 }]}>
                          {item.description}
                        </Text>
                        {/* <Image source={{uri:'https://picsum.photos/id/237/200/300'}} style={{height:20,width:20}}></Image> */}
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                          margin: 5,
                        }}>
                        <TouchableOpacity style={{ marginHorizontal: 10 }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              paddingHorizontal: 10,
                              paddingVertical: 10,
                              fontWeight: 'bold',
                              backgroundColor: '#DDC3A5',
                              borderRadius: 10,
                              color:'#000'
                            }}>
                            CART
                          </Text>
                          {/* <Text style={{textAlign:"center" ,paddingHorizontal:10 ,paddingVertical:10,fontWeight:"bold" , backgroundColor:"red" , borderRadius:10}}>BUY</Text> */}
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            marginHorizontal: 10,
                          }}>
                          {/* <Text style={{textAlign:"center" ,paddingHorizontal:10 ,paddingVertical:10,fontWeight:"bold" , backgroundColor:"#00FF00" , borderRadius:10 }}>CART</Text> */}
                          <Text
                            style={{
                              textAlign: 'center',
                              paddingHorizontal: 10,
                              paddingVertical: 10,
                              fontWeight: 'bold',
                              backgroundColor: '#BA7650',
                              borderRadius: 10,
                              color: '#ffffff',
                            }}>
                            BUY
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </>
                );
              })}
            </View>
          </View>
        </ScrollView>

        <View style={styles.containerbottom}>
          <View style={styles.bottomView}>
            <View style={{}}>
              <Image
                source={require('./image/home.png')}
                style={{ height: 30, width: 30, tintColor: '#BA7650' }}></Image>
              <Text style={{ color: '#BA7650', textAlign: 'center' }}>home</Text>
            </View>

            <View style={{}}>
              <Pressable onPress={btnOrder}>
                <Image
                  source={require('./image/shopping-bag.png')}
                  style={{ height: 30, width: 30, tintColor: '#ffffff' }}></Image>
                <Text style={{ color: '#ffffff', textAlign: 'center' }}>
                  order
                </Text>
              </Pressable>
            </View>

            <TouchableOpacity onPress={() => btnShow_profile()} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('./image/user.png')}
                style={{ height: 30, width: 30, tintColor: '#ffffff' }}></Image>
              <Text style={{ color: '#ffffff', textAlign: 'center' }}>
                profile
              </Text>
            </TouchableOpacity>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={btnCart}>
                <Image
                  source={require('./image/shopping-cart.png')}
                  style={{ height: 30, width: 30, tintColor: '#ffffff' }}></Image>
                <Text style={{ color: '#ffffff', textAlign: 'center' }}>
                  cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  display: {
    textAlign: 'center',
    // paddingLeft: 10,
    // margin: 5,
    lineHeight: 25,
    fontSize: 15,
    // fontWeight: '700',
    color: '#000',
    textTransform: 'capitalize',
  },
  categorieshome: {
    justifyContent: 'center',
    alignItems: 'center',
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

export default Home;

