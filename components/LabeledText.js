import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

import theme from '../theme';

export default class LabeledText extends React.Component {
  render() {
  	const {label, children} = this.props;
    return (
			<View style={styles.root}>
	  		<Text style={styles.label}>{label}</Text>
	  		<Text style={styles.text}> {children} </Text> 
  		</View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    alignSelf:'center',
  	width:theme.defaultContainerWidth,
  },
  label: {
  	...theme.inputFieldLabel,
  	marginBottom:2,
  	marginTop:5,
  },
  text: {
  	...theme.text,
    textAlign:'left',
  }
});
