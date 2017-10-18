import React,{Component} from 'react'
import {StackNavigator} from 'react-navigation'
import ChangeNumber from './ChangeNumber'
import  ShowJson from './ShowJson'
import Result from './Result'
import {connect} from 'react-redux'
let options={
    header:null
}
const Router = StackNavigator({
    ChangeNumber_Screen:{
        screen:ChangeNumber,
        navigationOptions:options
    },
    ShowJson_Screen:{
        screen:ShowJson,
        navigationOptions:options
    },
    Result_Screen:{
        screen:Result,
        navigationOptions:options
    }

})
export default connect()(Router);