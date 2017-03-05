import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component{
  render(){
    const {textStyle, bgStyle} = styles;
    return(
      //this stuff is JSX
      <View style={bgStyle}>
          <Text style={textStyle}>This is the home page.</Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    color: "white"
  },
  bgStyle: {
    backgroundColor: "#334455",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative'
  }
}

export default connect()(Home);
