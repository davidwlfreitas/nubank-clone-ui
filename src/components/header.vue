<template>
  <view>
    <view class="intro">
      <Image class="logo" :source="require('../../assets/Nubank_Logo.png')" />
      <nb-text class="title">
        David
      </nb-text>
    </view>
    <view class="arrow-down">
      <nb-icon name="ios-arrow-down" :style="{ fontSize: 14, color: '#FFF' }" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
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
  padding-bottom: 20;
}
</style>
