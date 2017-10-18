import React, {Component} from 'react'
import {View, Alert, KeyboardAvoidingView} from 'react-native'
import ButtonCpn from '../../Components/SampleComponent/ButtonCpn'
import InputCpn from '../../Components/SampleComponent/InputCpn'
import {connect} from 'react-redux'
import styles from './Styles'
import Actions from '../../Actions/Index'
import {bindActionCreators} from 'redux';

class ChangeNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {input: ""}
    }

    componentWillMount(){
      var {state}=this.props.navigation
        if(Object.keys(state).length==3){
          this.setState({input:state.params.inputReturn})
        }
    }
    _onIncreaseNumber() {


        if (this.onCheckInput(this.state.input) == true) {
            this.props.function.inCreaseNumber(Number(this.state.input))
        }
    }

    _onDecreaseNumber() {
        if (this.onCheckInput(this.state.input)) {
            this.props.function.deCreaseNumber(Number(this.state.input))
        }

    }

    _onNextPress() {
        var {navigate} = this.props.navigation
       console.log(navigate)
        navigate("ShowJson_Screen", {})
    }

    onCheckInput(value) {
        if ((isNaN(value)) || (value.length == "")) {

            Alert.alert("please input number")
            return false
        }
        return true;
    }

    _onSend() {
        let data = {
            input: this.state.input,
            result: this.props.state.data
        }
        if(this.onCheckInput(this.state.input)) {
            var {navigate} = this.props.navigation
            navigate("Result_Screen", {dataSend: data})
        }
        }

    _renderInput(){
        return(
            <InputCpn valueInput={(value) => {this.setState({input: value})}}
                      onIncrease={() => this._onIncreaseNumber()}
                      onDecrease={() => this._onDecreaseNumber()}
                      result={this.props.state.data}
                      inputholder={this.state.input}
                      onSubmitSend={() => {this._onSend()}}/>
        )
    }
    render() {
        return (
            <View style={styles.changenumber_container}>
                {this._renderInput()}
                <ButtonCpn onNextPress={() => {this._onNextPress()}}/>
            </View>
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