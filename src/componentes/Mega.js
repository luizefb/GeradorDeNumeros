import React, { Component } from "react";
import { Text, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

import Num from './Num'

export default class Mega extends React.Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumerosNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumerosNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const {qtdeNumeros} = this.state
        const numeros = []

        for(let i = 0; i < qtdeNumeros; i++){
            const n = this.gerarNumerosNaoContido(numeros)
            numeros.push(n)
        }

        numeros.sort((a, b) => a - b)
        this.setState({numeros})

    }

    exibirNum = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Num key={num} num={num} />
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Gerador de Mega-Sena
                </Text>

                <TextInput
                    keyboardType={'numeric'}
                    style={styles.input}
                    placeholder="Qtde de Números"
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alterarQtdeNumero}
                />

                <TouchableOpacity style={styles.botao} onPress={this.gerarNumeros}>
                    <Text style={styles.text2}>
                        Gerar
                    </Text>
                </TouchableOpacity>

                <View style={styles.containerNum}>  
                    {this.exibirNum()}
                </View>
    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold', 
        padding: 20,
        
    },
    text2: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold', 
        padding: 15,
        color: 'white'
    },
    botao: {
        borderRadius: 10,
        backgroundColor: '#000',
        elevation: 5,
        width: 120,
    },
    container: {
        padding: 10,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-evenly'
    },
    containerNum: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        width: 200,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    }
})