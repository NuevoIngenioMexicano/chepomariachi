/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 var MOCKED_MOVIES_DATA = [
    {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
  ];

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  ListView,
  View,
  Alert,
  TouchableHighlight,
  ToolbarAndroid,
  Navigator
} from 'react-native';

import { Subheader, Divider, List, Icon, Avatar, COLOR, IconToggle } from 'react-native-material-design';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';
import GiftedSpinner from 'react-native-gifted-spinner';
var Tarjeta = require('./src/tarjeta/tarjeta.js')
var Mariachis = require('./src/mariachis/mariachis.js')
var Uno = require('./src/tarjeta/uno.js')
var Dos = require('./src/tarjeta/dos.js')
var Tres = require('./src/tarjeta/tres.js')
var Cuatro = require('./src/tarjeta/cuatro.js')


var ROUTES = {
  tarjeta: Tarjeta,
  mariachis: Mariachis,
  uno: Uno,
  dos: Dos,
  tres: Tres,
  cuatro: Cuatro
};




class AwesomeProject extends Component {
  

 render() {
    return(
    <Navigator 
         //style={styles.container}
         initialRoute={{name:'mariachis'}}
         renderScene={function(route, navigator){
              var Component = ROUTES[route.name];
              return <Component route={route} navigator={navigator}/>
            }}
         //configureScene={() => {Navigator.SceneConfigs.FloatFromBottom}}
         />
  
  )}


 
}


AppRegistry.registerComponent('pruebaMaterial', () => AwesomeProject);



