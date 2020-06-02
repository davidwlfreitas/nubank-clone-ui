<template>
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
        <nb-icon name="chatbubbles" :style="{ fontSize: 20, color: '#FFF' }" />
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
</template>

<script>
import { Dimensions } from 'react-native';
export default {
  data() {
    return {
      windowWidth: Dimensions.get('screen').width,
      windowHeight: Dimensions.get('screen').height,
    };
  },
};
</script>

<style lang="scss" scoped>
.scroll-view-items {
  overflow: hidden;
  bottom: 30;
  height: 100px;
  background-color: #8b10ae;
  margin-left: 10px;
  position: relative;
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
</style>
