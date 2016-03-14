'use strict';
import React,{AppRegistry,Component,StyleSheet,Text,View} from 'react-native';
// Redux stuff is optional
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import AppRouter from "./router";
function reducer(state = {}, action) {
    /*
    switch (action.type) {
        case Actions.BEFORE_ROUTE:
            //console.log("BEFORE_ROUTE:", action);
            return state;
        case Actions.AFTER_ROUTE:
            //console.log("AFTER_ROUTE:", action);
            return state;
        case Actions.AFTER_POP:
            //console.log("AFTER_POP:", action);
            return state;
        case Actions.BEFORE_POP:
            //console.log("BEFORE_POP:", action);
            return state;
        case Actions.AFTER_DISMISS:
            //console.log("AFTER_DISMISS:", action);
            return state;
        case Actions.BEFORE_DISMISS:
            //console.log("BEFORE_DISMISS:", action);
            return state;
        default:
            return state;
    }
    */

}
let store = createStore(reducer);
class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}
export default App
