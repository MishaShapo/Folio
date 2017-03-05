import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

class CardListItem extends Component{
  render(){
    const {textStyle, bgStyle} = styles;
    return(
      <View style={styles.containerStyle}>
        <Text>this.props.item[1].name</Text>
      </View>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  contact: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string
  }),
  notes: PropTypes.string.isRequired
}


const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}
