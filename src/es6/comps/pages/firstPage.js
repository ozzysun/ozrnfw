'use strict';
import React,{Component,StyleSheet,Text,View} from 'react-native';

export default class FirstPage extends React.Component {
  render(){
    console.log('in first page');
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Im FirstPage too
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