'use strict';
import React,{Component} from 'react-native';
import { createStore } from 'redux'
import { Provider} from 'react-redux'
import AppRouter from "./router";
import rootReducer from './reducers'
const initialState = {
   red_player:{
    nowIndex:0,
    name:"ozplayer"
   },
   red_pageInfo:"initPageInfo" 
 };
let store = createStore(rootReducer,initialState);

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
