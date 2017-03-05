import React, { Component } from 'react';
import { View, Text, Image, ListView} from 'react-native';
import { connect } from 'react-redux';

import CardListItem from './CardListItem';

class CardList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.cardList);
    this.renderRow = this.renderRow.bind(this);
  }

  render() {
    return(
      <ListView
        dataSource = {this.props.cardList}
        renderRow = {this.renderRow}
      />
    );
  }

  renderRow(rowData) {
    return <CardListItem item = {rowData} navigator = {this.props.navigator} transitionCB = {this.props.transitionCB}/>;
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
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return {cardList: ds.cloneWithRows(Object.entries(state.cardList.cardList))};
};

export default connect(mapStateToProps)(CardList);
