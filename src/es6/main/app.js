'use strict';
import React,{Component} from 'react-native';
import { createStore } from 'redux'
import { Provider} from 'react-redux'
var RNRF = require('react-native-router-flux');
var {Actions} = RNRF;
import AppRouter from "./router";
/*
import rootReducer from './reducers'
const initialState = {
   red_player:{
    nowIndex:0,
    name:"ozplayer"
   },
   red_pageInfo:"initPageInfo" 
 };
*/
let store = createStore(reducer);
//let store = createStore(rootReducer,initialState);

function reducer(state = {}, action) {
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

}
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
