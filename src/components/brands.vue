<template>
  <nb-container>
    <nb-content padder>
      <view class="brand-text">
        <nb-text class="brand-text1">
          Hello, there!
        </nb-text>
        <nb-text class="brand-text2">
          Ready to check?
        </nb-text>
        <nb-text class="brand-text3">
          Select one of these trusted brands
        </nb-text>
      </view>

      <view
        :style="{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
        }"
      >
        <view class="column-left">
          <touchable-opacity
            v-for="(brand, index) in brandsInfoLeft"
            :key="index"
            :on-press="() => setOrganization(brand)"
          >
            <view class="brand-shadow" :style="shadowStyle">
              <Image
                :source="{ uri: brand.download_url }"
                class="brand-avatar"
              />
              <nb-text class="brand-title">
                {{ brand.id }}
              </nb-text>
            </view>
          </touchable-opacity>
        </view>
        <view class="column-middle" />
        <view class="column-right">
          <touchable-opacity
            v-for="(brand, index) in brandsInfoRight"
            :key="index"
            :on-press="() => setOrganization(brand)"
          >
            <view class="brand-shadow" :style="shadowStyle">
              <Image
                :source="{ uri: brand.download_url }"
                class="brand-avatar"
              />
              <nb-text class="brand-title">
                {{ brand.id }}
              </nb-text>
            </view>
          </touchable-opacity>
        </view>
      </view>
      <nb-spinner v-if="loading" color="#0B70E4" class="loading" />
    </nb-content>
  </nb-container>
</template>

<script>
import Settings from '../../settings';
import store from '../store';
export default {
  props: {
    navigation: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      brandsInfoLeft: [],
      brandsInfoRight: [],
      loading: false,
      shadowStyle: {},
    };
  },
  mounted() {
    this.getBrands();
    this.shadowStyle = {
      ...this.elevationShadowStyle(5),
      backgroundColor: 'gray',
    };
  },
  methods: {
    getBrands() {
      this.loading = true;
      // let url = `${Settings.baseUrl}brands?clientId=${Settings.clientId}&clientSecret=${Settings.clientSecret}`;
      let url = `${Settings.baseUrl}`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          this.loading = false;
          this.brandsInfoLeft = responseJson.filter(
            (el, index) => index % 2 === 0,
          );
          this.brandsInfoRight = responseJson.filter(
            (el, index) => index % 2 === 1,
          );
        })
        .catch(error => console.log(error));
    },
    async setOrganization(brand) {
      await store
        .dispatch('SET_ORGANIZATION', {
          organization: brand,
        })
        .then(this.navigation.navigate('Welcome', { brand: brand }));
    },
    elevationShadowStyle(elevation) {
      return {
        elevation: elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.1 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.brand-text {
  width: 60%;
  margin-top: 20;
  margin-bottom: 20;
  margin-left: 20;
}
.brand-text1 {
  font-size: 16;
}
.brand-text2 {
  font-size: 48;
}
.brand-text3 {
  font-size: 24;
}
.column-left {
  width: 144;
}
.column-middle {
  width: 5%;
}
.column-right {
  width: 144;
  padding-top: 97;
}
.brand-shadow {
  flex: 1;
  background-color: gray;
  border-radius: 10;
  margin-bottom: 20;
}
.brand-avatar {
  width: 143;
  height: 190;
  position: relative;
  border-radius: 10;
  margin-bottom: 1;
}
.brand-title {
  position: absolute;
  left: 10;
  bottom: 20;
  color: white;
  font-size: 24;
}
.loading {
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;
}
</style>
