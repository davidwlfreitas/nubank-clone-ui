<template>
  <nb-container
    v-if="currentBrand"
    :style="{ flexDirection: 'row', justifyContent: 'center' }"
  >
    <Image class="welcome-back" :source="{ uri: currentBrand.url }" />
    <Image class="welcome-logo" :source="{ uri: currentBrand.download_url }" />
    <Image
      class="welcome-bike"
      :style="welcomeStyles.welcomeBottom"
      :source="require('../../assets/logo-kitchen-sink.png')"
    />
  </nb-container>
</template>

<script>
import { StyleSheet } from 'react-native';
export default {
  props: {
    navigation: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      welcomeStyles: StyleSheet.create({
        welcomeBottom: {
          height: 250,
        },
      }),
      currentBrand: {},
    };
  },
  mounted() {
    this.currentBrand = this.navigation.state.params.brand;
    setTimeout(() => {
      // this.navigation.navigate('Camera');
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
.welcome-back {
  width: 100%;
  height: 100%;
  position: relative;
}
.welcome-logo {
  margin-top: 150;
  position: absolute;
  height: 55;
  width: 105;
}
.welcome-bike {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
