'use strict';
import React, { Component } from 'react';
import {
  AlertIOS,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Video from 'react-native-video';

export default class VideoPlayer extends Component {
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: true
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.fullScreen} onPress={() => {this.setState({paused: !this.state.paused})}}>
          <Video 
            source={require("./broadchurch.mp4")}
            style={styles.fullScreen}
            rate={this.state.rate}
            volume={this.state.volume}
            muted={this.state.muted}
            paused={this.state.paused}
            resizeMode={this.state.resizeMode}
            repeat={false}
            onEnd={() => { AlertIOS.alert('Done Master!') }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

AppRegistry.registerComponent('VideoPlayer', () => VideoPlayer);
