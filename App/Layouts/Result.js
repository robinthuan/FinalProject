import React,{Component} from 'react'
import {View,TextInput,Text} from 'react-native'
import InputCpn from '../Components/SampleComponent/InputCpn'
import styles from './Styles'
import {connect} from 'react-redux'
class Result extends Component{
    constructor(props){
        super(props)
        state={result:'',input:''}
    }
   componentWillMount(){
       const { state } =this.props.navigation;
       let data=state.params.dataSend;
       this.setState({result:data.result,input:data.input})
   }
    render(){
        return(
            <View style={styles.result_container}>
                <TextInput style={styles.result_input}
                           placeholder={this.state.input}/>

                <Text style={styles.result_text}>Result:{this.state.result}</Text>
            </View>
        )
    }
}
export default connect()(Result);