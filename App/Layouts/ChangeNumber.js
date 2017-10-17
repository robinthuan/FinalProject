import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import ButtonCpn from '../Components/ButtonCpn'
import InputCpn from '../Components/InputCpn'
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

        console.log("asas",this.state.input)
         if (this.onCheckInput(this.state.input) == true) {
             this.props.function.inCreaseNumber(Number(this.state.input))
         }
    }

    onDecreaseNumber() {
        if (this.onCheckInput(this.state.input)) {
            this.props.function.deCreaseNumber(Number(this.state.input))
        }

    }

    onCheckInput(value) {
        if ((isNaN(value)) || (value.length =="")) {

            Alert.alert("please input number")
            return false
        }
        return true;
    }

    render() {
        return (
            <View style={styles.changenumber_container}>
                <InputCpn valueInput={(value) => {
                    this.setState({input: value})
                }}
                          onIncrease={() => this.onIncreaseNumber()}
                          onDecrease={() => this.onDecreaseNumber()}
                          result={this.props.state.data}
                />
                <ButtonCpn/>
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