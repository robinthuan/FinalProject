import React,{Component} from 'react'
import {StackNavigator} from 'react-navigation'
import ChangeNumber from './ChangeNumber'
import  ShowJson from './ShowJson'
import Result from './Result'
import {connect} from 'react-redux'
const Router = StackNavigator({
    ChangeNumber_Screen:{
        screen:ChangeNumber,
        navigationOptions:{
            header:null
        }
    },
    ShowJson_Screen:{
        screen:ShowJson,
        navigationOptions:{
            header:null
        }
    },
    Result_Screen:{
        screen:Result,
        navigationOptions:{
            header:null
        }
    }

})
export default connect()(Router);