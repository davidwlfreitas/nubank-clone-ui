// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { QRCode } from 'react-native-custom-qr-codes-expo';

export default class QrCode extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <QRCode
        content={this.props.url}
        size={this.props.size}
        backgroundColor={this.props.bgColor}
        color={this.props.fgColor}
      />
    );
  }
}
