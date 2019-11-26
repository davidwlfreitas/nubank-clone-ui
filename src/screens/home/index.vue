<template>
  <nb-container class="container">
    <nb-content padder>
      <header-app></header-app>

      <view class="content">
        <animated-opacity :translateY="translateY">
          <hidden-menu></hidden-menu>
        </animated-opacity>

        <animated-card
          :translateY="translateY"
          :onHandlerStateChange="onHandlerStateChange"
        >
          <main-card></main-card>
        </animated-card>
      </view>
    </nb-content>
    <animated-opacity :showReverse="true" :translateY="translateY">
      <footer-app></footer-app>
    </animated-opacity>
  </nb-container>
</template>

<script>
import { Animated } from 'react-native';
import AnimatedCard from '../../components/animations/animatedCard';
import AnimatedOpacity from '../../components/animations/animatedOpacity';
import { State } from 'react-native-gesture-handler';
import HeaderApp from '../../components/header';
import MainCard from '../../components/mainCard';
import HiddenMenu from '../../components/hiddenMenu';
import FooterApp from '../../components/footer';
export default {
  props: {
    navigation: {
      required: true,
      type: Object,
    },
  },
  components: {
    HeaderApp,
    MainCard,
    HiddenMenu,
    FooterApp,
    AnimatedCard,
    AnimatedOpacity,
  },
  data() {
    return {
      translateY: new Animated.Value(0),
    };
  },
  methods: {
    onHandlerStateChange(event) {
      let offset = 0;
      if (event.nativeEvent.oldState === State.ACTIVE) {
        let opened = false;
        const { translationY } = event.nativeEvent;

        offset += translationY;

        if (translationY >= 150) {
          opened = true;
        } else {
          this.translateY.setValue(offset);
          this.translateY.setOffset(0);
          offset = 0;
        }

        Animated.timing(this.translateY, {
          toValue: opened ? 380 : 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          offset = opened ? 380 : 0;
          this.translateY.setOffset(offset);
          this.translateY.setValue(0);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #8b10ae;
  padding-top: 80px;
  justify-content: center;
}
.header {
  background-color: #8b10ae;
}
.content {
  flex: 1;
  z-index: 5;
  min-height: 400px;
  align-items: center;
}
</style>
