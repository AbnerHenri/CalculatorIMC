import React from "react";
import { View, Text, Image, Share, TouchableOpacity } from 'react-native'
import Styles from "../styles/FormStyle";
import CategoryImage from '../assets/customer-behavior.png'

function Result(props){

    const onShare = async () => {
        const result = await Share.share({
            message : 'Meu IMC hoje é ' + props.resultIMC,
        })
    }
    

    return(
        <View style={{display : 'flex', alignItems : 'center'}}>

            <Text style={Styles.message}>{props.messageResult}</Text>
            <Text style={Styles.result}>{props.resultIMC}</Text>

            <View style={Styles.resultBox}>
                <Image source={CategoryImage} style={Styles.logo} />
                <Text style={Styles.result}>{props.category}</Text>
            </View>

            <View>
                {props.resultIMC != null ? 
                    <TouchableOpacity style={Styles.shareButton} onPress={onShare}>
                        <Text style={{color : 'white'}}>Compartilhar</Text>
                    </TouchableOpacity>
                    :
                    <View />
                }
            </View>
            
        </View>
    )
}

export default Result;