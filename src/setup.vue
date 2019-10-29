<template>
  <view class="container">
    <vue-native-base-theme>
      <app-loading v-if="!isAppReady" />
      <app v-else-if="isAppReady" />
    </vue-native-base-theme>
  </view>
</template>

<script>
import Vue from 'vue-native-core';
import { VueNativeBase } from 'native-base';
import Vuelidate from 'vuelidate';
import App from './index.vue';
import { AppLoading } from 'expo';
import VueNativeBaseTheme from './utils/nativebase/theme';
import Roboto from '../node_modules/native-base/Fonts/Roboto.ttf';
import Roboto_medium from '../node_modules/native-base/Fonts/Roboto_medium.ttf';

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);
Vue.use(Vuelidate);

export default {
  components: { VueNativeBaseTheme, App, AppLoading },
  data: function() {
    return {
      isAppReady: false,
    };
  },
  created: function() {
    this.loadFonts();
  },
  methods: {
    loadFonts: async function() {
      try {
        this.isAppReady = false;
        // eslint-disable-next-line no-undef
        await Expo.Font.loadAsync({
          Roboto: Roboto,
          Roboto_medium: Roboto_medium,
          // Ionicons: require("../node_modules/@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.isAppReady = true;
      } catch (error) {
        console.log('some error occured', error);
        this.isAppReady = true;
      }
    },
  },
};
</script>

<style>
.container {
  flex: 1;
}
</style>
