import React from "react";
import { Text, View, StyleSheet } from 'react-native'

import Cont from "./componentes/Cont";

function App() {
    return (
        <View style={styles.container}>
            <Cont />
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