/* eslint-disable no-unused-vars */
import { fetchPosts } from './fetch';
import { AsyncStorage } from 'react-native';

// ensure data for rendering given list type
export function FETCH_LIST_DATA({ commit, dispatch }, { type }) {
  return fetchPosts(type).then(posts => {
    return commit('SET_POSTS', { posts });
  });
}

export function LOGIN({ commit, state }, { userObj, navigate }) {
  commit('LOGGING_IN', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit('LOGIN_SUCCESSFUL', { userObj });
      AsyncStorage.setItem('email', userObj.email);
      navigate('Home');
      resolve();
    }, 1000);
  });
}

export function SET_USER({ commit, state }, { userObj }) {
  return commit('LOGIN_SUCCESSFUL', { userObj });
}

export function LOGOUT({ commit, state }, callback) {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem('email').then(() => {
      callback();
      resolve();
    });
  });
}

export function SET_ORGANIZATION({ commit, state }, { organization }) {
  return commit('SET_CURRENT_ORGANIZATION', { organization });
}
