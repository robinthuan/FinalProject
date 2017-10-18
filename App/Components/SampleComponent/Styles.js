import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    input_cpn_container: {

        padding:5
    },
    input_cpn_container_textinput: {


        height:60,
        marginTop:10,

    },
    input_cpn_textinput: {
        fontSize:35,
        textAlign:'center',

    },
    input_cpn_container_operator: {

        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'black',
        height:60,
        margin:10,

    },
    input_cpn_button_container:{
        flex:1,


    },
    input_cpn_text_operator: {
        fontSize:50,
        color:'white',
        textAlign:"center"
    },
    input_cpn_result_container: {
        padding:5,
        height:40,
    },
    input_cpn_text_result: {
        fontSize:30,
        textAlign:'center'
    },
    button_cpn_container:{
        padding:5,
        marginTop:40,
    },
    button_cpn_touch_conatiner:{
        height: 40,
        backgroundColor:"#0198E1",
        alignItems:'center'
    },
    button_cpn_text:{
      color:'black',
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold'
    }

})