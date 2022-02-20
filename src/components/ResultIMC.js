import React from "react";
import { View, Text } from 'react-native'

function Result(props){
    return(
        <View>
            <Text>{props.messageResult}</Text>
            <Text>{props.resultIMC}</Text>
            <Text>Categoria : {props.category}</Text>
        </View>
    )
}

export default Result;