import React from "react";
import { Text, View, StyleSheet } from 'react-native'

import Mega from "./componentes/Mega";

function App() {
    return (
        <View style={styles.container}>
            <Mega qtdeNumeros={12}/>
        </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default App