import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

    boxTitle : {
        alignItems : 'center',
        justifyContent : 'center',
        padding : 10,
    },

    textTitle : {
        color : '#ff0043',
        fontSize : 24,
        fontWeight : 'bold',
        marginBottom : 70,
    },

    formContext : {
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 20,
    },

    boxForm : {
        padding : 50,
        borderRadius : 30,
        backgroundColor : '#ffffff'
    },  

    inputs : {
        padding : 15,
        marginBottom : 20,
        width : 230,
        textAlign : 'center',
        borderRadius : 20,
        backgroundColor : '#e0e5e5'
    },

    button : {
        borderRadius : 30,
        width : 320,
        height : 50,
        justifyContent : 'center',
        backgroundColor : '#ff0043'
    },

    textButton : {
        textAlign : 'center',
        fontSize : 22,
        color : '#ffffff',
    },

    shareButton : {
        padding: 10,
        paddingHorizontal : 20,
        top : 20,
        borderRadius : 20,
        backgroundColor : '#478bff',
    },  

    logo : {
        flexDirection : 'row',
        width : 50,
        height : 50,
    },

    resultBox : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        borderWidth : 2,
        borderColor : '#ff0043',
        borderRadius : 10,
        padding : 10,
        width : '105%',   
    },

    result : {
        letterSpacing : 2,
        fontWeight : 'bold',
        fontSize : 20,
        margin : 10,
        color : 'red'
    },

    message : {
        fontSize : 20,
        marginTop : 5,
        color : 'red'
    }
})

export default Styles;