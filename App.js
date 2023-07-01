import React from 'react';
import { View } from 'react-native';
import Home from './Home';
import Order from './Order';
import Cart from './Cart';
import Screen1 from './Screen1';
import Screen2 from './Screen2';





import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loding from './Loding';
import Login from './Login';
import Create_Account from './Create_Account';
import Profile from './Profile';
import Edit_profile from './Edit_profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Create_Account" component={Create_Account} />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Edit_profile" component={Edit_profile} options={{headerShown:false}} />

        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />

        <Stack.Screen name="Looding" component={Loding} options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Loding></Loding> */}
      {/* <Profile></Profile> */}
      {/* <Home></Home> */}
      {/* <Edit_profile></Edit_profile> */}

{/* <Login></Login> */}
{/* <Create_Account></Create_Account> */}
    </>
  )
}

export default App;
