// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

export default class AnimatedCard extends Component {
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
    const animatedEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationY: this.props.translateY,
          },
        },
      ],
      { useNativeDriver: true },
    );

    return (
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={this.props.onHandlerStateChange}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: this.props.translateY.interpolate({
                  inputRange: [-350, 0, 480],
                  outputRange: [-50, 0, 550],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          {this.props.children}
        </Animated.View>
      </PanGestureHandler>
    );
  }
}
