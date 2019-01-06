//author: Tudor Barbulescu
import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class PrimaryButton extends Component {
  render() {
    return (
  		<TouchableOpacity 
  			style={styles.button}
  			onPress={() => console.log("Press")}
  		>
    			<Text style={styles.buttonText}> {this.props.title} </Text>
			</TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
  	...theme.primaryButton,
  	width:'100%',
  },
  buttonText: {
  	...theme.buttonText,
  },
});

	