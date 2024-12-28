import React, { useState } from "react";
import { Text, StyleSheet, View, Image } from 'react-native'

import ContDisplay from "./ContDisplay";
import ContBotoes from "./ContBotoes";

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <View>
            
            <Text style={styles.text}>Contador</Text>
            <ContDisplay num={num} />

            <View style={styles.container}>
                <ContBotoes inc={inc} dec={dec} />
            </View>

            <View style={styles.containerImage}>
                <Image 
                source={require('../assets/gastly.png')} 
                style={styles.image} 
                resizeMode="contain"
                />
            </View>

        </View>
        

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold', 
        padding: 20,
    },
    container: {
        padding: 10
    },
    containerImage: {
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        width: 250,
        height: 250,
      },
})
