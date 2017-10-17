import React, {Component} from 'react'
import {View, Alert,KeyboardAvoidingView} from 'react-native'
import ButtonCpn from '../Components/SampleComponent/ButtonCpn'
import InputCpn from '../Components/SampleComponent/InputCpn'
import {connect} from 'react-redux'
import styles from './Styles'
import Actions from '../Actions/Index'
import {bindActionCreators} from 'redux';

class ChangeNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {input:""}
    }

    onIncreaseNumber() {


         if (this.onCheckInput(this.state.input) == true) {
             this.props.function.inCreaseNumber(Number(this.state.input))
         }
    }

    onDecreaseNumber() {
        if (this.onCheckInput(this.state.input)) {
            this.props.function.deCreaseNumber(Number(this.state.input))
        }

    }
onNextPress(){
    var {navigate} = this.props.navigation
    navigate("ShowJson_Screen",{})
}
    onCheckInput(value) {
        if ((isNaN(value)) || (value.length =="")) {

            Alert.alert("please input number")
            return false
        }
        return true;
    }
onSend(){
   let data={
       input:this.state.input,
       result:this.props.state.data
   }
    var {navigate} = this.props.navigation
    navigate("Result_Screen",{dataSend:data})
}

render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.changenumber_container}>
                <InputCpn valueInput={(value) => {
                    this.setState({input: value})
                }}
                          onIncrease={() => this.onIncreaseNumber()}
                          onDecrease={() => this.onDecreaseNumber()}
                          result={this.props.state.data}
                          onSubmitSend={()=>{this.onSend()}}
                />
                <ButtonCpn onNextPress={()=>{this.onNextPress()}}/>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state.AppReducer
    }

}

function mapDispatchToProps(dispatch) {
    return {
        function: bindActionCreators({...Actions.ChangeNumberAction}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeNumber);