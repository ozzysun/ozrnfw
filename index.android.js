/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React,{AppRegistry,Component,StyleSheet,Text,View} from 'react-native';
import Starter from './src/es6/main/Starter';
AppRegistry.registerComponent('oz', () => Starter);
/*
class oz extends Component {
  render() {
    console.log('test log 001');
    console.warn('render test warn...11311114')
    //console.error('render test error...')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native oz test0001!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <MyPage />
      </View>
    );
  }
}
class MyPage extends Component{
  render(){
    console.log('in mypage 11log 123456dd');
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Im Indised MyPage
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

AppRegistry.registerComponent('oz', () => oz);
*/
