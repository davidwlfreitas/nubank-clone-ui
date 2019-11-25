<template>
  <nb-container class="container">
    <nb-content padder>
      <header-app></header-app>

      <view class="content">
        <view class="qr-code">
          <qr-code :url="qrCode" :size="80" bgColor="#fff" fgColor="#8b10ae" />
        </view>

        <hidden-menu :translateY="translateY"></hidden-menu>

        <animated-card class="content-card">
          <nb-card>
            <nb-card-item class="card-header" header>
              <nb-icon
                name="logo-usd"
                :style="{ fontSize: 28, color: '#666' }"
              />
              <nb-icon
                name="eye-off"
                :style="{ fontSize: 28, color: '#666' }"
              />
            </nb-card-item>
            <nb-card-item class="card-content">
              <nb-body>
                <nb-text class="card-content-title">Saldo disponível</nb-text>
                <nb-text class="card-content-description">
                  R$ 197.611,65
                </nb-text>
              </nb-body>
            </nb-card-item>
            <nb-card-item footer class="card-footer">
              <nb-text class="card-footer-text"
                >Tranferência de R$ 1.000 recebida de Mário Sérgio Cortella hoje
                ás 08:00h</nb-text
              >
            </nb-card-item>
          </nb-card>
        </animated-card>
      </view>
    </nb-content>
    <footer-app></footer-app>
  </nb-container>
</template>

<script>
import QrCode from '../../components/qrCode';
import HeaderApp from '../../components/header';
import HiddenMenu from '../../components/hiddenMenu';
import FooterApp from '../../components/footer';
import AnimatedCard from '../../components/animations/animatedCard';
import { Animated } from 'react-native';
export default {
  props: {
    navigation: {
      required: true,
      type: Object,
    },
  },
  components: {
    QrCode,
    HeaderApp,
    HiddenMenu,
    FooterApp,
    AnimatedCard,
  },
  data() {
    return {
      qrCode: 'https://nubank.com.br/en/',
      translateY: new Animated.Value(0),
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #8b10ae;
  padding-top: 80px;
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
.content-card {
  flex: 1;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: -20;
}
.card-header {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
}
.card-content {
  flex: 1;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  justify-content: center;
}
.card-content-title {
  font-size: 13px;
  color: #999;
}
.card-content-description {
  font-size: 32px;
  margin-top: 3px;
  color: #333;
}
.card-footer {
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  background-color: #eee;
  border-radius: 4px;
}
.card-footer-text {
  font-size: 12px;
  color: #333;
}
.qr-code {
  padding: 10px;
  background-color: #fff;
}
</style>
