import React, { useEffect, useState } from "react";
import { TextInput, Text, View, Button } from 'react-native'
import Result from './ResultIMC'

function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [message, setMessage] = useState('Preencha o peso e altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [category, setCategory] = useState(null)

    function CalcIMC(){
        return setImc((weight / (height*height)).toFixed(2))
    }

    function ValidationCategory(){
        if(imc > 0){
            setCategory('Abaixo do Peso')
        }
        
        if(imc > 18.5){
            setCategory('Normal')
        }
        
        if(imc > 24.99){
            setCategory('Pré-Obesidade')
        }
        
        if(imc > 29.99){
            setCategory('Obesidade Classe |')
        }
        
        if(imc > 34.99){
            setCategory('Obesidade Classe ||')
        }
    }

    function ValidationImc(){

        if(height != null && weight != null){
            CalcIMC()
            setHeight(null)
            setWeight(null)
            setMessage('Seu IMC é : ')
            setTextButton('Calcular Novamente')
            return
        }

        setImc(null)
        setHeight(null)
        setWeight(null)
        setTextButton('Calcular')
        setMessage('Preencha o peso e altura')
    }

    useEffect(()=>{
        ValidationCategory();
    },[imc])


    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex : 1.75" keyboardType="numeric" onChangeText={setHeight} value={height}></TextInput>
                <Text>Peso</Text>
                <TextInput placeholder="Ex : 68kg" keyboardType="numeric" onChangeText={setWeight} value={weight}></TextInput>
            </View>

            <View><Button onPress={() => ValidationImc()} title={textButton}/></View>

            <Result messageResult={message} resultIMC={imc} category={category}/>
        </View>
    )
}

export default Form;