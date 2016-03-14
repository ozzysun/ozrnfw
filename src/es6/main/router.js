'use strict';
import React,{AppRegistry,Component,StyleSheet,Text,View} from 'react-native';

var RNRF = require('react-native-router-flux');
var {Route, Schema, Animations, Actions, TabBar} = RNRF;

// Redux stuff is optional
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
// all page
var FirstPage = require('./comps/pages/firstPage'); 
const Router = connect()(RNRF.Router);

class APPRouter extends React.Component {
  render(){
    return(
        <Router hideNavBar={true} name="root">
          <Route name="firstPage" component={FirstPage} title="FirstPage"/>
          <Route name="launch" initial={true} component={FirstPage} wrapRouter={true} title="Launch1" hideNavBar={true}/>
        </Router>
      
    )
  }
}
export default AppRouter
