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

import { Toolbar as MaterialToolbar } from 'react-native-material-design';
import { Card, Button } from 'react-native-material-design';


module.exports = React.createClass({
  
  render: function(){
    return (
      
      <View>
         <MaterialToolbar
                title={'El trio canta recío'}
                //primary={theme}
                icon={'arrow-back'}
                onIconPress={() => this.props.navigator.pop()}
                //actions={[{
                  //  icon: 'warning',
                   // badge: { value: 3, animate: true },
                    //onPress: this.increment
                //}]}
                rightIconStyle={{
                    margin: 10
                }}
            />
      <Card style={styles.tarje}>
                    <Card.Media
                        image={<Image source={{uri: "http://vignette2.wikia.nocookie.net/rango/images/6/6e/Mariachi.jpg/revision/latest?cb=20110411182808"}} />}
                        overlay
                    />
                    <Card.Body>
                        <Text>Aaaaah que ca.....nijo cantamos</Text>
                    </Card.Body>
                    <Card.Actions position="center">
                        <Button value="Contratar" onPress={function(){
                           fetch('https://chepomariachix.herokuapp.com/mensaje')
                              .then((response) => {
                                   Alert.alert('Contratación',"Su orden está siendo procesada",)
                               })
                              
                              .done();
                        }}/>
                    </Card.Actions>
                </Card>
      
      </View>
      
      )}
       
})


var styles = StyleSheet.create({
  tarje: {
    marginTop: 75
  }
})