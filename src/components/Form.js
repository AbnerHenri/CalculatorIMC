import React, { useEffect, useState } from "react";
import Styles from "../styles/FormStyle";
import { TextInput, Text, View, TouchableOpacity, Pressable, Keyboard, Vibration, FlatList } from 'react-native'
import Result from './ResultIMC'

function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [message, setMessage] = useState('Preencha o peso e altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [category, setCategory] = useState(null)
    const [imcList, setImcList] = useState([])

    function CalcIMC(){
        let heightFormat = height.replace(',', '.')
        let totalImc = (weight / (heightFormat*heightFormat)).toFixed(2)
        setImcList((arr) => [...arr, {id : new Date().getTime(), imc : totalImc}])
        setImc(totalImc)
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
        }else{
            Vibration.vibrate()
            setImc(null)
            setHeight(null)
            setWeight(null)
            setCategory('')
            setTextButton('Calcular')
            Keyboard.dismiss()
            setMessage('Preencha o peso e altura')
        }
    }

    useEffect(()=>{
        ValidationCategory();
    },[imc])


    return(
        <View style={Styles.boxForm}>{ imc == null ? 
        <Pressable onPress={Keyboard.dismiss} style={Styles.formContext} >
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
            
                <Text style={{fontSize : 20, color : '#ff0043'}}>{message}</Text>

            <TouchableOpacity style={Styles.button} onPress={() => ValidationImc()}>
                <Text style={Styles.textButton}>{textButton}</Text>
            </TouchableOpacity>
            </Pressable>

            : <View>
                <Result messageResult={message} resultIMC={imc} category={category}/>
                    <TouchableOpacity style={Styles.button} onPress={() => ValidationImc()}>
                        <Text style={Styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>


                    <FlatList 
                        showsVerticalScrollIndicator={false}
                        data={imcList.reverse()}
                        renderItem={({item})=> 
                            <Text style={Styles.listImcText}>Resultado IMC : {item.imc}</Text>}
                        keyExtractor={(item)=> item.id} />
                </View>
                }
        </View>
    )
}

export default Form;