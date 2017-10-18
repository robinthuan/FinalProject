import React, {Component} from 'react'
import {View, TextInput, Text, TouchableOpacity} from 'react-native'
import styles from './Styles'
import {connect} from 'react-redux'

class InputCpn extends Component {
    _renderInput() {
        return (
            <View style={styles.input_cpn_container_textinput}>
                <TextInput
                    style={styles.input_cpn_textinput}
                    onChangeText={this.props.valueInput}
                    returnKeyType="send"
                    returnKeyLabel="send"
                    onSubmitEditing={this.props.onSubmitSend}
                    placeholder={this.props.inputholder}/>
            </View>
        )
    }

    _renderOperator() {
        return (
            <View style={styles.input_cpn_container_operator}>

                <TouchableOpacity style={styles.input_cpn_button_container}
                                  onPress={this.props.onIncrease}>
                    <Text style={styles.input_cpn_text_operator}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.input_cpn_button_container}
                                  onPress={this.props.onDecrease}>
                    <Text style={styles.input_cpn_text_operator}>-</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.input_cpn_container}>
                {this._renderInput()}
                {this._renderOperator()}
                <View style={styles.input_cpn_result_container}>

                    <Text style={styles.input_cpn_text_result}>Result:{this.props.result}</Text>

                </View>

            </View>
        )
    }
}

export default connect()(InputCpn);