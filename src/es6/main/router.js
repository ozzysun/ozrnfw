'use strict';
import React,{Component} from 'react-native';
import { Provider, connect } from 'react-redux'

var RNRF = require('react-native-router-flux');
var {Route, Schema, Animations, Actions, TabBar} = RNRF;
const Router = connect()(RNRF.Router);
// all page
import FirstPage from '../comps/pages/firstPage';

class AppRouter extends React.Component {
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
