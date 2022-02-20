import React from "react";
import { View, Text, Image } from 'react-native'
import Styles from "../styles/FormStyle";
import CategoryImage from '../assets/customer-behavior.png'

function Result(props){
    return(
        <View style={{display : 'flex', alignItems : 'center'}}>
            <Text style={Styles.message}>{props.messageResult}</Text>
            <Text style={Styles.result}>{props.resultIMC}</Text>

            <View style={Styles.resultBox}>
                <Image source={CategoryImage} style={Styles.logo} />
                <Text style={Styles.result}>{props.category}</Text>
            </View>
            
        </View>
    )
}

export default Result;