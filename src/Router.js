import React, { Component } from 'react';
import { Navigator, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
//import {  } from './actions';


import Home from './components/Home';
import Capture from './components/Capture';
import IndividualCard from './components/IndividualCard';


/*Views
  - home, list of cards with search
  - view individual cards
  - capture with camera
*/

class RouterComponent extends Component {

  constructor(props) {
    super(props);
    this.configureScene = this.configureScene.bind(this);
  }

  configureScene(route, routeStack){
    if(route.title == "Capture") {
      return {
        ...Navigator.SceneConfigs.HorizontalSwipeJump,
        gestures: {
          jumpForward: {
            ...Navigator.SceneConfigs.HorizontalSwipeJump.gestures.jumpForward,
            edgeHitWidth: 30
          }
        }
      }
    } else if(route.title == "IndividualCard"){
      return {
        ...Navigator.SceneConfigs.HorizontalSwipeJump,
        gestures: {
          jumpBack: {
            ...Navigator.SceneConfigs.HorizontalSwipeJump.gestures.jumpBack,
            edgeHitWidth: 30
          }
        }
      }
    }
    return {
      ...Navigator.SceneConfigs.HorizontalSwipeJump,
      gestures: {
        jumpBack: {
          ...Navigator.SceneConfigs.HorizontalSwipeJump.gestures.jumpBack,
          edgeHitWidth: 30
        },
        jumpForward: {
          ...Navigator.SceneConfigs.HorizontalSwipeJump.gestures.jumpForward,
          edgeHitWidth: 30
        }
      }
    };
  }

  render() {
    const routes = [
      {title: "Capture"},
      {title: "Home"},
      {title: "IndividualCard"}
    ];

    return(
      <Navigator
        initialRoute={routes[1]}
        initialRouteStack={routes}
        sceneStyle={styles.sceneStyle}
        renderScene={(route, navigator) => {
          switch (route.title) {
            case "Home":
              return <Home />;
            case "Capture":
              return <Capture />;
            case "IndividualCard":
              return <IndividualCard />;
          }
        }}
        configureScene={this.configureScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
                LeftButton: (route,navigator) => {
                  switch (route.title) {
                    case "Home":
                      return (
                        <TouchableOpacity onPress={() => {
                          if(navigator.state.presentedIndex == 1){
                            navigator.jumpBack();
                          }
                        }}>
                          <Image
                            source={require('../assets/icons/capture_icon.png')}
                            style={styles.navigationIconStyle}
                          />
                        </TouchableOpacity>
                      );
                    case "IndividualCard":
                      return(
                        <TouchableOpacity onPress={ () =>{
                          if(navigator.state.presentedIndex == 2){
                            navigator.jumpBack();
                          }

                        }}>
                          <Image
                            source={require('../assets/icons/home_icon.png')}
                            style={styles.navigationIconStyle}
                          />
                        </TouchableOpacity>
                      );
                    case "Capture":
                      return null;
                  }
                },
                RightButton: (route,navigator) => {
                  switch (route.title) {
                    case "Home":
                      return (
                        <TouchableOpacity onPress={() => {
                          if(navigator.state.presentedIndex == 1){
                            navigator.jumpForward();
                          }

                        }}>
                          <Image
                            source={require('../assets/icons/individual_card_icon.png')}
                            style={styles.navigationIconStyle}
                          />
                        </TouchableOpacity>
                      );
                    case "IndividualCard":
                      return null;
                    case "Capture":
                      return (
                        <TouchableOpacity onPress={() => {
                          if(navigator.state.presentedIndex == 0){
                            navigator.jumpForward();
                          }

                        }}>
                          <Image
                            source={require('../assets/icons/home_icon.png')}
                            style={styles.navigationIconStyle}
                          />
                        </TouchableOpacity>
                      );
                }
              },
              Title: (route, navigator) => {
                  return (
                    <Text style={styles.titleStyle}>{route.title}</Text>
                  );
              }
            }}
          />
        }
      />
    );
  }
}

const styles = {
  navigationIconStyle : {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginRight: 20
  },
  navigationBarStyle: {
    backgroundColor:'#007bff',
    borderBottomWidth: 0
  },
  titleStyle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  sceneStyle: {
    flex:1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
}

const mapStateToProps = state => {
  //TODO
  return {};
};

export default connect(mapStateToProps)(RouterComponent);
