import React from "react";
import { View, SafeAreaView, StyleSheet, Image, Text, Pressable } from "react-native";

function Order({ navigation }) {

    const btnHome = () => {
        navigation.navigate('Home')
    }
    const btnCart = () => {
        navigation.navigate('Cart')
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text style={{ fontSize: 20 }}>Your Order</Text>
                </View>

                <View style={styles.containerbottom}>
                    <View style={styles.bottomView}>
                        <View style={{}}>
                            <Pressable onPress={btnHome}>
                                <Image source={require('./image/home.png')} style={{ height: 30, width: 30, tintColor: '#ffffff' }}></Image>
                                <Text style={{ color: '#ffffff' }}>home</Text>

                            </Pressable>
                        </View>

                        <View style={{}}>
                            <Pressable >
                                <Image source={require('./image/shopping-bag.png')} style={{ height: 30, width: 30, tintColor: '#BA7650' }}></Image>
                                <Text style={{ color: '#BA7650' }}>order</Text>
                            </Pressable>

                        </View>

                        <View style={{ justifyContent: "center", alignItems: 'center' }}>
                            <Pressable >
                                <Image source={require('./image/user.png')} style={{ height: 30, width: 30, tintColor: '#ffffff' }}></Image>
                                <Text style={{ color: '#ffffff' }}>profile</Text>
                            </Pressable>
                        </View>

                        <View style={{ justifyContent: "center", alignItems: 'center' }}>
                            <Pressable onPress={ btnCart}>
                                <Image source={require('./image/shopping-cart.png')} style={{ height: 30, width: 30, tintColor: '#ffffff' }}></Image>
                                <Text style={{ color: '#ffffff' }}>cart</Text>
                            </Pressable>
                        </View>


                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({

    containerbottom: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomView: {

        flex: 1,
        width: '100%',
        borderRadius: 10,
        height: 80,
        textAlign: 'center',
        backgroundColor: '#363837',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textStyle: {
        color: '#fff',
        fontSize: 18,
    },
});
export default Order;