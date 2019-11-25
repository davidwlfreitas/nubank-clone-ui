// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

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
    const translateY = new Animated.Value(0);
    let offset = 0;
    const animatedEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationY: translateY,
          },
        },
      ],
      { useNativeDriver: true },
    );

    function onHandlerStateChange(event) {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        let opened = false;
        const { translationY } = event.nativeEvent;

        offset += translationY;

        if (translationY >= 100) {
          opened = true;
        } else {
          translateY.setValue(offset);
          translateY.setOffset(0);
          offset = 0;
        }

        Animated.timing(translateY, {
          toValue: opened ? 380 : 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          offset = opened ? 380 : 0;
          translateY.setOffset(offset);
          translateY.setValue(0);
        });
      }
    }

    return (
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
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
