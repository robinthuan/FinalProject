import React, {Component} from 'react'
import {View, TextInput, Text,Alert} from 'react-native'
import InputCpn from '../../Components/SampleComponent/InputCpn'
import styles from './Styles'
import {connect} from 'react-redux'

class Result extends Component {
    constructor(props) {
        super(props)
        state = {result: '', input: ''}
    }

    componentWillMount() {
        const {state} = this.props.navigation;
        console.log(state)
        let data = state.params.dataSend;
        this.setState({result: data.result, input: data.input})
    }

    onReturn(){
       if(isNaN(this.state.input) || this.state.input=="" ){
           Alert.alert("please input number")
       }
       else {
           var {navigate} = this.props.navigation
           navigate("ChangeNumber_Screen", {inputReturn: this.state.input})
       }
       }
    render() {
        return (
            <View style={styles.result_container}>
                <TextInput style={styles.result_input}
                           placeholder={this.state.input}
                           onChangeText={(_input)=>{this.setState({input:_input})}}
                           returnKeyType="done"
                           returnKeyLabel="done"
                           onSubmitEditing={()=>this.onReturn()}/>

                <Text style={styles.result_text}>Result:{this.state.result}</Text>
            </View>
        )
    }
}

export default connect()(Result);