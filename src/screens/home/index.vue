<template>
  <nb-container class="container">
    <nb-content padder>
      <view class="intro">
        <Image
          class="logo"
          :source="require('../../../assets/Nubank_Logo.png')"
        />
        <nb-text class="title">
          David
        </nb-text>
      </view>
      <view class="arrow-down">
        <nb-icon
          name="ios-arrow-down"
          :style="{ fontSize: 14, color: '#FFF' }"
        />
      </view>

      <view class="content">
        <view class="qr-code">
          <QRCode
            :value="qrCode"
            :size="120"
            :bgColor="bgColor"
            :fgColor="fgColor"
          />
        </view>

        <view class="menu-content">
          <nb-list class="menu-list-items">
            <nb-list-item></nb-list-item>
            <nb-list-item>
              <nb-icon
                name="help-circle-outline"
                :style="{ fontSize: 20, color: '#FFF' }"
              />
              <nb-body>
                <nb-text class="tab-text">Me ajuda</nb-text>
              </nb-body>
            </nb-list-item>
            <nb-list-item>
              <nb-icon name="person" :style="{ fontSize: 20, color: '#FFF' }" />
              <nb-body>
                <nb-text class="tab-text">Perfil</nb-text>
              </nb-body>
            </nb-list-item>
            <nb-list-item>
              <nb-icon name="card" :style="{ fontSize: 20, color: '#FFF' }" />
              <nb-body>
                <nb-text class="tab-text">Configurar Cartão</nb-text>
              </nb-body>
            </nb-list-item>
            <nb-list-item>
              <nb-icon
                name="phone-portrait"
                :style="{ fontSize: 20, color: '#FFF' }"
              />
              <nb-body>
                <nb-text class="tab-text">Configurações do app</nb-text>
              </nb-body>
            </nb-list-item>
          </nb-list>
        </view>

        <nb-card class="content-card">
          <nb-card-item class="card-header" header>
            <nb-icon name="logo-usd" :style="{ fontSize: 28, color: '#666' }" />
            <nb-icon name="eye-off" :style="{ fontSize: 28, color: '#666' }" />
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
      </view>
    </nb-content>

    <nb-footer class="scroll-view-items">
      <scroll-view
        :ref="
          scrollView => {
            this.scrollView = scrollView;
          }
        "
        :horizontal="true"
        :showHorizontalScrollIndicator="false"
        :snap-to-interval="windowWidth - 60"
        :decelerationRate="0"
      >
        <view class="tab-item">
          <nb-icon name="person-add" :style="{ fontSize: 20, color: '#FFF' }" />
          <nb-text class="tab-text">Indicar amigos</nb-text>
        </view>
        <view class="tab-item">
          <nb-icon
            name="chatbubbles"
            :style="{ fontSize: 20, color: '#FFF' }"
          />
          <nb-text class="tab-text">Cobrar</nb-text>
        </view>
        <view class="tab-item">
          <nb-icon
            name="arrow-round-down"
            :style="{ fontSize: 20, color: '#FFF' }"
          />
          <nb-text class="tab-text">Depositar</nb-text>
        </view>
        <view class="tab-item">
          <nb-icon
            name="arrow-round-up"
            :style="{ fontSize: 20, color: '#FFF' }"
          />
          <nb-text class="tab-text">Transferir</nb-text>
        </view>
        <view class="tab-item">
          <nb-icon name="lock" :style="{ fontSize: 20, color: '#FFF' }" />
          <nb-text class="tab-text">Bloquear cartão</nb-text>
        </view>
      </scroll-view>
    </nb-footer>
  </nb-container>
</template>

<script>
import QRCode from 'react-native-qrcode';
// import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Dimensions } from 'react-native';
export default {
  props: {
    navigation: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      // iPhoneXHeight: getStatusBarHeight,
      windowWidth: Dimensions.get('screen').width,
      windowHeight: Dimensions.get('screen').height,
      qrCode: 'https://nubank.com.br/en/',
      bgColor: '#FFF',
      fgColor: '#8b10ae',
    };
  },
  components: {
    QRCode,
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
.intro {
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
  width: 100%;
  top: 20;
}
.title {
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
}
.arrow-down {
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;
}
.scroll-view-items {
  overflow: hidden;
  bottom: 20;
  height: 100px;
  background-color: #8b10ae;
  margin-left: 10px;
}
.tab-item {
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
}
.tab-text {
  color: #fff;
  font-size: 13px;
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
  top: 480px;
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
.menu-content {
  width: 100%;
}
.qr-code {
  padding: 20px;
}
</style>
