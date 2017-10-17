import React,{Component} from 'react'
import {View} from 'react-native'
import Router from './Router'
import {connect} from 'react-redux'
class Index extends Component{
    render(){
        return(

            <Router/>
        )
    }
}
export default connect()(Index);