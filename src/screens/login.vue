<template>
  <nb-container v-if="loaded" :style="{ backgroundColor: '#fff' }">
    <status-bar :bar-style="'light-content'" />
    <image-background class="imageContainer">
      <view class="logoContainer" :style="stylesObj.logoContainerStyle">
        <image-background
          :source="launchscreenLogo"
          class="logo"
          :style="stylesObj.logoStyle"
        />
      </view>
      <!-- <Login :navigation="navigation"></Login> -->
      <view class="text-container" />
    </image-background>
    <nb-content padder>
      <nb-form>
        <nb-item
          :error="
            (!$v.emailValue.required || !$v.emailValue.email) &&
              $v.emailValue.$dirty
          "
        >
          <nb-input
            v-model="emailValue"
            placeholder="Email"
            auto-capitalize="none"
            :on-blur="() => $v.emailValue.$touch()"
          />
        </nb-item>
        <nb-item last :error="!$v.password.required && $v.password.$dirty">
          <nb-input
            v-model="password"
            placeholder="Password"
            auto-capitalize="none"
            secure-text-entry
            :on-blur="() => $v.password.$touch()"
          />
        </nb-item>
      </nb-form>
      <view :style="{ marginTop: 10 }">
        <button block :on-press="login" title="Login" />
      </view>
      <nb-spinner v-if="!loaded" />
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform, AsyncStorage } from 'react-native';
import { Toast } from 'native-base';
import launchscreenLogo from '../../assets/logo-kitchen-sink.png';
import { required, email } from 'vuelidate/lib/validators';
import store from '../store';

export default {
  props: {
    navigation: {
      type: Object,
    },
  },
  data: function() {
    return {
      emailValue: '',
      password: '',
      loaded: false,
      // launchScreenBg: launchScreenBg,
      launchscreenLogo: launchscreenLogo,
      stylesObj: {
        logoContainerStyle: {
          marginTop: Dimensions.get('window').height / 8,
        },
        logoStyle: {
          left: Platform.OS === 'android' ? 40 : 50,
          top: Platform.OS === 'android' ? 35 : 60,
        },
        btnContainer: {
          backgroundColor: '#0b70e4',
          alignSelf: 'center',
        },
      },
    };
  },
  computed: {
    logging_in() {
      return store.state.logging_in;
    },
  },
  validations: {
    emailValue: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  created() {
    AsyncStorage.getItem('email').then(val => {
      if (val) {
        this.loaded = true;
        this.navigation.navigate('Home');
        store.dispatch('SET_USER', { userObj: { email: val } });
      } else {
        this.loaded = true;
      }
    });
  },
  methods: {
    login() {
      if (this.emailValue && this.password && !this.$v.emailValue.$invalid) {
        store.dispatch('LOGIN', {
          userObj: { email: this.emailValue },
          navigate: this.navigation.navigate,
        });
      } else {
        Toast.show({
          text: 'Invalid Email or Password',
          buttonText: 'Okay',
        });
      }
    },
  },
};
</script>

<style>
.imageContainer {
  flex: 1;
}
.text-color-primary {
  color: #0b70e4;
  font-family: Roboto;
}
.logoContainer {
  flex: 1;
  margin-bottom: 30;
}
.logo {
  position: absolute;
  width: 280;
  height: 100;
}
.text-container {
  align-items: center;
  margin-bottom: 250;
  background-color: transparent;
}
.text-color-white {
  color: #0b70e4;
}
.button-container {
  background-color: #0b70e4;
  align-self: center;
}
</style>
