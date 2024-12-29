import React from "react";
import { Text, View, StyleSheet } from 'react-native'

export default ({num}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {num}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25,
    },
    text:{
        color: '#FFF',
        textAlign: 'center',
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: 5
    }
})