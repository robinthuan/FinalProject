import React, {Component} from 'react'
import {View, TextInput, Text, TouchableOpacity} from 'react-native'
import styles from './Styles'
import {connect} from 'react-redux'

class InputCpn extends Component {
    render() {
        return (
            <View style={styles.input_cpn_container}>
                <View style={styles.input_cpn_container_textinput}>
                    <TextInput
                        style={styles.input_cpn_textinput}
                    onChangeText={this.props.valueInput}
                        returnKeyType="send"
                        onSubmitEditing={this.props.onSubmitSend}

                    ></TextInput>
                </View>
                <View style={styles.input_cpn_container_operator}>
                    <TouchableOpacity style={styles.input_cpn_button_container}
                    onPress={this.props.onIncrease}
                    >
                        <Text style={styles.input_cpn_text_operator}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.input_cpn_button_container}
                    onPress={this.props.onDecrease}
                    >
                        <Text style={styles.input_cpn_text_operator}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.input_cpn_result_container}>
                    <Text style={styles.input_cpn_text_result}>Result:{this.props.result}</Text>

                </View>

            </View>
        )
    }
}

export default connect()(InputCpn);