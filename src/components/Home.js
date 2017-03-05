import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import CardList from './CardList';

class Home extends Component{
  render(){
    const {textStyle, bgStyle} = styles;
    return(
      <View style={bgStyle}>
          <CardList navigator = {this.props.navigator} transitionCB = {this.props.transitionCB}/>
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
