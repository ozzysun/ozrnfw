'use strict';
import React,{AppRegistry,Component,StyleSheet,Text,View} from 'react-native';
var App = require('./main/app');
class Starter {
  constructor(){
    this.ver = '0'
    this.useTrace = true
    //--tool--
    //this.tool = new Tool()
    this.commonTool = new CommonTool()
    this.trace = this.commonTool.trace
    this.loadJSON = this.commonTool.loadJSON
    this.getElementsWithAttribute = this.commonTool.getElementsWithAttribute

    this.init()

  }
  init(){

  }
  run (configData){

  }
  //-- utils --
  
    
}

const starter = new Starter()
//starter.ver = '789'
//starter.trace(`ver=${starter.ver}`)
export default Starter
