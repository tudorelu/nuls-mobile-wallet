import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

import theme from '../theme';

export default class InputField extends React.Component {
  render() {
  	const {label} = this.props;
    return (
			<View style={styles.root}>
	  		<Text style={styles.label}>{label}</Text>
	  		<TextInput 
	  			style={styles.inputField}
	  			{...this.props}
	  			/> 
  		</View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
  	width:'100%',
  },
  label: {
  	...theme.inputFieldLabel,
  	marginBottom:5,
  	marginTop:10,
  },
  inputField: {
  	...theme.inputField,
  	marginTop:5,
  	marginBottom:5,
  	padding:3,
  	paddingLeft:15,
  	paddingRight:15,
  }
});
