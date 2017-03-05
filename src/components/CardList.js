import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

class CardList extends Component {
  constructor() {
    super();
    
  }

  render() {
    return(
      <ListView
        dataSource = {this.props.cardList}
        renderRow = {(rowData => <CardListItem item = {rowData} />}
      />
    );
  }
}

const styles = {
/* need different style
  textStyle: {
    fontSize: 18,
    color: "white"
  },
  bgStyle: {
    backgroundColor: "#704790",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative'
  }
*/
}

const mapStateToProps = (state) => {
  return {cardList: Object.entries(state.cardList.cardList)};
};

export default connect(mapStateToProps)(CardList);
