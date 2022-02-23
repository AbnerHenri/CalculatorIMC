import React from "react";
import { View, Text } from 'react-native'
import Styles from '../styles/FormStyle'

function Title(){
    return(
        <View style={Styles.boxTitle}>
            <Text style={Styles.textTitle} >Calculator IMC</Text>
        </View>
    )
}

export default Title;