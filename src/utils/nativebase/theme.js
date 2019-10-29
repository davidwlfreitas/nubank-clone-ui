/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class VueMaterialTheme extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        {this.props.children}
      </StyleProvider>
    );
  }
}
