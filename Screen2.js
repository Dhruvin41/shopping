import React from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";


function Screen2({ route, navigation }) {
    const { pass } = route.params;
    const { ind } = route.params;



    console.log("Screen2 Pass" , pass)

    // const imageArr = [
    //     //1
    //     [
    //         {
    //             pimg: require('./image/Dairy/d1.png'),
                
    //         },
    //         {
    //             pimg: require('./image/Dairy/d1.png'),
                
    //         }, 
    //         {
    //             pimg: require('./image/Dairy/d1.png'),
                
    //         }, 
    //         {
    //             pimg: require('./image/Dairy/d1.png'),
                
    //         },
    //         {
    //             pimg: require('./image/Dairy/d1.png'),
                
    //         },
           
    //     ],
    //     [
    //         {
    //             pimg: require('./image/Vagetables/v1-8.png'),
                
    //         },
    //         {
    //             pimg: require('./image/Vagetables/v1-8.png'),
                
    //         }, {
    //             pimg: require('./image/Vagetables/v1-8.png'),
                
    //         }, {
    //             pimg: require('./image/Vagetables/v1-8.png'),
                
    //         }, {
    //             pimg: require('./image/Vagetables/v1-8.png'),
                
    //         },
           
    //     ],

    //     //2
       

    // ]

    return (
        <>
            <View style={{ margin: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={pass.pimg} style={{ width: 250, height: 250 }}></Image>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            imageArr[ind].map((item, ind) => {
                                return (
                                   
                                        <View style={{ margin: 3, borderRadius: 50, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={item.pimg} style={{ width: 100, height: 100 }}></Image>
                                            {/* <Text>{ind.text}</Text> */}
                                        </View>
                                    

                                )
                            })
                        }
                    </View>
                </ScrollView>
                {/* <View>
                    <View style={{ marginVertical: 3 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{pass.price}</Text>
                    </View>
                    <View style={{ marginVertical: 3 }}>
                        <Text style={{ borderRadius: 12, color: 'green', backgroundColor: '#C0EEE4', width: 140, textAlign: 'center' }}>{pass.offer}</Text>

                    </View>
                    <View style={{ backgroundColor: '#5F8D4E', width: 60, borderRadius: 300, marginVertical: 3 }}>
                        <Text style={{ textAlign: 'center', fontWeight: '900' }}>{pass.revu}</Text>
                    </View>
                </View> */}
                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 12, flexDirection: 'row', padding: 10 }}>
                    <View style={{ flexDirection: 'row', margin: 4, }}>
                        <Image resizeMode="cover" source={require('./image/heart.png')} style={{ width: 20, height: 20 }}></Image>
                    </View>

                    <View>
                        <Image resizeMode="cover" source={require('./image/share.png')} style={{ width: 20, height: 20 }}></Image>
                    </View>

                </View>



            </View>


            <View style={{ bottom: 0, position: 'absolute', height: 60, flex: 1, width: '100%', flexDirection: 'row', justifyContent: "space-evenly", marginBottom: 20 }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: '45%', borderWidth: 2 }}>
                    <Image source={require('./image/shopping-cart.png')} style={{ width: 25, height: 25 }}></Image>
                    <Text style={{ textAlign: 'right' }}>Add To Cart</Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF597B', width: '45%' }}>
                    <Image source={require('./image/right-arrow.png')} style={{ width: 25, height: 25 }}></Image>
                    <Text>Buy Now</Text>
                </View>

            </View>
        </>
    )
}
export default Screen2;