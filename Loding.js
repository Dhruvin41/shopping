import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Loding = ({route, navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'grey',
       flex:1,
       alignItems:'center',
       justifyContent:'center'
        
      }}>
      <Text style={{fontSize:40}}>Loding</Text>
    </View>
  );
};

export default Loding;

const styles = StyleSheet.create({});
