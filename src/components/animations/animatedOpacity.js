// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class AnimatedOpacity extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 500,
    }).start();
  }
  render() {
    const animationStyles = {
      opacity: this.state.animation,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    };
    return (
      <Animated.View style={[animationStyles]}>
        {this.props.children}
      </Animated.View>
    );
  }
}
