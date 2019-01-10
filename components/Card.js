//Created by Tudor Barbulescu

import React, { Component } from 'react';

import {
  StyleSheet,
  View, 
  Text
} from 'react-native';

import theme from '../theme';

class Card extends Component {
  render() {
    
    const {title, children} = this.props;

    return (
    	<View style={styles.container}>
    		<View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
    		</View>
    		<View style={styles.content}>
        <Text style={styles.contentText}>{children}</Text>
    		</View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    width:theme.defaultContainerWidth,
    paddingBottom:15,
    alignSelf:'center'
	},
	title: {
		backgroundColor: theme.palette.primary.main,
	},
	content: {
		backgroundColor: theme.palette.primary.midDark,
    padding:10,
		justifyContent: 'center', 
	},
  titleText: {
    color:'white',
    margin:5,
    marginLeft:10,
    fontSize: 14,
  },
  contentText: {
    ...theme.text,
    fontSize: 32,
  }
});


export default Card;