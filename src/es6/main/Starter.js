'use strict';
import React,{AppRegistry,Component,StyleSheet,Text,View} from 'react-native';

var RNRF = require('react-native-router-flux');
var {Route, Schema, Animations, Actions, TabBar} = RNRF;

// Redux stuff is optional
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'


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
let store = createStore(reducer);
const Router = connect()(RNRF.Router);

class MyRouter extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Router hideNavBar={true} name="root">
        </Router>
      </Provider>
    )
  }
}
export default class Starter extends React.Component {
  render(){
    console.log('in mypage router');
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Im Starter1234
        </Text>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});