import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

class Capture extends Component{
  render(){
    const {textStyle, bgStyle} = styles;
    return(
      <View style={bgStyle}>
          <Text style={textStyle}>This is the capture page.</Text>
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
    backgroundColor: "#7a2c2c",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative'
  }
}

export default connect()(Capture);
