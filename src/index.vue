<template>
  <root>
    <app-navigation />
  </root>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { StackNavigator, DrawerNavigator } from 'vue-native-router';
import { Root } from 'native-base';
import LoginScreen from './screens/login.vue';
import Sidebar from './screens/sidebar.vue';
import HomeScreen from './screens/home/index.vue';
import Brands from './components/brands.vue';
import WelcomeScreen from './components/welcome.vue';

const Drawer = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Brands: { screen: Brands },
    Welcome: { screen: WelcomeScreen },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <Sidebar {...props} />,
  },
);

const AppNavigation = StackNavigator(
  {
    Login: { screen: LoginScreen },
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  },
);
export default {
  components: { Root, AppNavigation },
};
</script>
