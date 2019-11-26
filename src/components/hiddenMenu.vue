<template>
  <view class="menu-content">
    <view class="qr-code">
      <qr-code :url="qrCode" :size="80" bgColor="#fff" fgColor="#8b10ae" />
    </view>

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
      <nb-list-item class="last-item">
        <nb-body>
          <touchable-opacity class="btn-out">
            <nb-text class="tab-text">Sair</nb-text>
          </touchable-opacity>
        </nb-body>
      </nb-list-item>
    </nb-list>
  </view>
</template>

<script>
import QrCode from '../components/qrCode';
export default {
  components: {
    QrCode,
  },
  data() {
    return {
      qrCode: 'https://nubank.com.br/en/',
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-content {
  width: 100%;
  align-items: center;
  flex: 1;
  position: absolute;
}
.menu-list-items {
  width: 100%;
}
.tab-text {
  color: #fff;
  font-size: 13px;
}
.btn-out {
  justify-content: center;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  align-items: center;
  padding: 12px;
  border-width: 1px;
}
.last-item {
  border-bottom-color: transparent;
}
.qr-code {
  padding: 10px;
  background-color: #fff;
}
</style>
