// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Animated, Dimensions } from 'react-native';

//import { Container, Content, Text, StyleProvider } from 'native-base';
export default class AnimatedUpDown extends Component {
  state = {
    animation: new Animated.Value(0),
    animationInterpolated: 0,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.start !== this.props.start) {
      Animated.timing(this.state.animation, {
        toValue: this.props.start ? 1 : 0,
        duration: 1000,
      }).start();

      this.setState({
        animationInterpolated: this.state.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -(Dimensions.get('screen').height - 300 - 140)],
        }),
      });
    }
  }
  componentDidMount() {}
  render() {
    const animationStyles = {
      transform: [{ translateY: this.state.animationInterpolated }],
    };
    return (
      <Animated.View style={[animationStyles]}>
        {this.props.children}
      </Animated.View>
    );
  }
}
