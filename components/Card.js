//Created by Tudor Barbulescu

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import theme from '../theme';

export default class Card extends Component {
  render() {
    
    const {title, children} = this.props;

    return (
    	<View style={styles.container}>
    		<View style={styles.title}>
    			{title}
    		</View>
    		<View style={styles.content}>
    			<Text style={styles.contentText}>
    				{children}
    			</Text>
    		</View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 140,
	},
	title: {
		height: 40,
		backgroundColor: theme.palette.primary.main,
	},
	content: {
		backgroundColor: theme.palette.primary.midDark,
		justifyContent: 'center', 
	},
	contentText: {
		...theme.text,
		fontSize: 32,
	}
});


export default Card;