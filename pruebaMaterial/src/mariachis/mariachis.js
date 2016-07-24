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
var REQUEST_URL = 'https://chepomariachix.herokuapp.com';


module.exports = React.createClass({
  
    fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.mariachis),
          loaded: true,
        });
      })
      .done();
  },
  
  
  getInitialState() {
    return { 
       dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        loaded: false,
    };
  },
  
    

  componentDidMount() {
    this.fetchData();
  },
  
   render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
     
    }

    return (
      <View>
  

       <MaterialToolbar
                title={'ChepoMariachi'}
                //primary={theme}
                icon={'menu'}
                onIconPress={() => Alert.alert('Mi Alerta',"chepix",)}
                //actions={[{
                  //  icon: 'warning',
                   // badge: { value: 3, animate: true },
                    //onPress: this.increment
                //}]}
                rightIconStyle={{
                    margin: 10
                }}
            />
        
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
        
     
       
      </View>
      
    );
  },
  
  
   renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  },

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.image}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <TouchableHighlight onPress={() => this.props.navigator.push({name: movie.miview})}>
          <Text style={styles.title}>{movie.title}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }





})






var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 7,
    borderBottomColor: '#EEEBEB',
    borderBottomWidth: 1
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    marginBottom: 4
  },
  rightContainer: {
    flex: 1,
  },
   title: {
    fontSize: 17,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 60,
    backgroundColor: '#F5FCFF',
  },
});

