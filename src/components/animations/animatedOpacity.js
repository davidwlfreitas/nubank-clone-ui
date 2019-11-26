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
      transform: this.props.showReverse
        ? [
            {
              translateY: this.props.translateY.interpolate({
                inputRange: [0, 480],
                outputRange: [0, 50],
                extrapolate: 'clamp',
              }),
            },
          ]
        : [],
      opacity: this.props.translateY.interpolate({
        inputRange: [0, 150],
        outputRange: this.props.showReverse ? [1, 0.3] : [0, 1],
      }),
      alignItems: 'center',
    };
    return (
      <Animated.View style={[animationStyles]}>
        {this.props.children}
      </Animated.View>
    );
  }
}
