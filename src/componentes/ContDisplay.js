import React from "react";
import { Text, StyleSheet, View } from 'react-native'

export default props => {
    return (
        <View style={styles.display}>
            <Text style={styles.text}>
                {props.num}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold', 
        padding: 20,
        color: '#fff',
    },
    display: {
        backgroundColor: '#000',
        borderRadius: 5,
        elevation: 5
    
    }
})