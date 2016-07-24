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
                title={'Mariachi'}
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
                        image={<Image source={{uri: "http://genheration.com/wp-content/uploads/2016/04/New-York-City-Skyline.jpg"}} />}
                        overlay
                    />
                    <Card.Body>
                        <Text>Some text to go in the body.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button value="ACTION" />
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