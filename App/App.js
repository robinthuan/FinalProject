import React,{ Component} from 'react'
import ChangeNumber from './Layouts/ChangeNumber'
import { Provider} from 'react-redux'
import store from './Stores/StoreConfig'
export default class App extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }
    render(){
        return(
            <Provider store={store}>
             <ChangeNumber/>
            </Provider>
        )
    }
}