import React, { useEffect, useState } from "react";
import Styles from "../styles/FormStyle";
import { TextInput, Text, View, TouchableOpacity, Pressable, Keyboard } from 'react-native'
import Result from './ResultIMC'

function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [message, setMessage] = useState('Preencha o peso e altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [category, setCategory] = useState(null)

    function CalcIMC(){
        let heightFormat = height.replace(',', '.')
        return setImc((weight / (heightFormat*heightFormat)).toFixed(2))
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
            Keyboard.dismiss()
            return
        }

        setImc(null)
        setHeight(null)
        setWeight(null)
        setCategory('')
        setTextButton('Calcular')
        setMessage('Preencha o peso e altura')
    }

    useEffect(()=>{
        ValidationCategory();
    },[imc])


    return(
        <Pressable onPress={Keyboard.dismiss} style={Styles.boxForm}>
            <View  style={Styles.formContext}>
                <Text style={{fontSize : 18}}>Altura</Text>
                <TextInput  
                    placeholderTextColor={'gray'} 
                    style={Styles.inputs} 
                    placeholder="Ex : 1.75" 
                    keyboardType="numeric"
                     onChangeText={setHeight} 
                     value={height}></TextInput>

                <Text style={{fontSize : 18}}>Peso</Text>
                <TextInput  
                    placeholderTextColor={'gray'} 
                    style={Styles.inputs} 
                    placeholder="Ex : 68kg" 
                    keyboardType="numeric" 
                    onChangeText={setWeight} 
                    value={weight}></TextInput>
            </View>

            <TouchableOpacity style={Styles.button} onPress={() => ValidationImc()}>
                <Text style={Styles.textButton}>{textButton}</Text>
            </TouchableOpacity>

            <Result messageResult={message} resultIMC={imc} category={category}/>
        </Pressable>
    )
}

export default Form;