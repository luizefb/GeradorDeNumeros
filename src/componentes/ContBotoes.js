import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botao} onPress={props.dec}>
                <Text style={styles.text}>
                    -
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={props.inc}>
                <Text style={styles.text}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        borderRadius: 10,
        backgroundColor: '#000',
        width: 50,
        elevation: 5
    },
    text: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold', 
        padding: 20,
        color: '#fff'
    },
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    }
})