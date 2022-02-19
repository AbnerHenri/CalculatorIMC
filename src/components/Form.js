import React from "react";
import { TextInput, Text, View, Button } from 'react-native'
import Result from './ResultIMC'

function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex : 1.75" keyboardType="numeric"></TextInput>
                <Text>Peso</Text>
                <TextInput placeholder="Ex : 68kg" keyboardType="numeric"></TextInput>
            </View>

            <View><Button title='Calcular IMC'/></View>

            {/* <Result messageResult={messageIMC} resultIMC={imc} /> */}
        </View>
    )
}

export default Form;