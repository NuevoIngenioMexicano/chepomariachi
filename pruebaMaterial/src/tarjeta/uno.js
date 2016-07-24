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
import StarRating from 'react-native-star-rating';


module.exports = React.createClass({
  
  
   getInitialState() {
    return { 
       starCount: 3.5
    };
  },
  
 
  
  

  
  
  render: function(){
    return (
      
      <View>
         <MaterialToolbar
                title={'Mariachi Músical'}
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
                        image={<Image source={{uri: "http://www.cuanto-gana.com/wp-content/uploads/2015/11/cuanto-cobra-un-mariachi2-600x406.jpg"}} />}
                        overlay
                    />
                    <Card.Body>
                        <Text>El mejor mariachi de México</Text>
                      <StarRating 
                        disabled={true}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                      />
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