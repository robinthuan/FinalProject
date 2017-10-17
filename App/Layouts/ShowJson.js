import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {connect} from 'react-redux'
import Actions from '../Actions/Index'
import { bindActionCreators } from 'redux';

class  ShowJson extends Component {
    constructor(props){
        super(props)

    }
    componentWillMount(){
     this.props.function.getWeatherOfCity('London')

}
    render(){
        return(
            <View style={{flex:1}}>
                <Text style={{flex:1}}>{JSON.stringify(this.props.state.json)}</Text>
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
        function: bindActionCreators({...Actions.GetWeatherAction}, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowJson)