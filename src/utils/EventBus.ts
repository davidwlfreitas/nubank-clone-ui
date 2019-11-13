import Vue from 'vue-native-core';
export const EventBus = new Vue();

/**
 * 
 * How to Use: 
 * 
 * 1) First of all import the EventBus
 *      
 *      import { EventBus } from '../../utils/EventBus';
 * 
 * 2) After set up the methods below inside a component which will receive the message: 
 * 
 *      created() {
 *         EventBus.$on('set-items', this.onSetItems);
 *      },
 *      destroyed() {
 *        EventBus.$off('set-items', this.onSetItems);
 *      }
 * 
 * 3) And then, just set up the emitter of the message: 
 * 
 *      EventBus.$emit('set-items', someValue);
 * 
 */
