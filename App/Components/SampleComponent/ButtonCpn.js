import React, {Component} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import styles from './Styles'
import {connect} from 'react-redux'

export class ButtonCpn extends Component {
    render() {
        return (
            <View style={styles.button_cpn_container}>
                <TouchableOpacity style={styles.button_cpn_touch_conatiner}
                                  onPress={this.props.onNextPress}>
                    <Text style={styles.button_cpn_text}>NEXT</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default connect()(ButtonCpn);