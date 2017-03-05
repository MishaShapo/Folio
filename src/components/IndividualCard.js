import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import CardSection from './CardSection';
import Card from './Card';

class IndividualCard extends Component{
  constructor(props) {
    super(props);

  }

  componentWillRender() {
    console.log('IndivCard props:', this.props);

  }
  render(){
    return(
      <View>
        <Card>
          <CardSection style = {styles.titleStyle}>
            <TouchableHighlight>
              <Text style={styles.titleStyle}>
                {this.props.card.name}
              </Text>
            </TouchableHighlight>
          </CardSection>
          <CardSection>
            <TouchableHighlight>
              <Text>
                {this.props.card.contact.email}
              </Text>
            </TouchableHighlight>
          </CardSection>
          <CardSection>
            <TouchableHighlight>
              <Text>
                {this.props.card.contact.phone}
              </Text>
            </TouchableHighlight>
          </CardSection>
          <CardSection>
            <TouchableHighlight>
              <Text>
                {this.props.card.notes}
              </Text>
            </TouchableHighlight>
          </CardSection>
        </Card>
      </View>
    );
  }
}
/*
//    const {textStyle, bgStyle} = styles;
const styles = {
  textStyle: {
    fontSize: 18,
    color: "blue"
  },
  bgStyle: {
    backgroundColor: "#334455",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative'
  }
}
*/

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("cardkey in INdivCards:", ownProps.cardkey);
  return {card: state.cardList.cardList[ownProps.cardkey]};
}

export default connect(mapStateToProps)(IndividualCard);
