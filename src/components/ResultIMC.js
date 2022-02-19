import React from "react";
import { View } from 'react-native'

function Result(props){
    return(
        <View>
            <Text>{props.resultIMC}</Text>
            <Text>{props.messageResult}</Text>
        </View>
    )
}

export default Result;