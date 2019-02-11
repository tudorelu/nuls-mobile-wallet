//author: Tudor Barbulescu
import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import theme from '../theme';

export default class PrimaryButton extends Component {
  render() {
    return (
  		<TouchableOpacity 
  			style={styles.button}
  			onPress={() => this.props.onPress()}
  		>
    			<Text style={styles.buttonText}> {this.props.title} </Text>
			</TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
  	...theme.primaryButton,
    marginTop:20,
  },
  buttonText: {
  	...theme.buttonText,
  },
});

	