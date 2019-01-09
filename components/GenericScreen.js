//Authored by: Tudor Barbulescu (tudor.barbu7@gmail.com) ROMANIA + AUSTRALIA

import React, { Component } from 'react';

import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

//import Icon from 'react-native-vector-icons/Feather';

//import { Ionicons } from '@expo/vector-icons';

import { Icon } from 'react-native-elements'

import theme from '../theme';

export default class GenericScreen extends Component {
	render(){
    const {title, avatar} = this.props;
		return (
      <ScrollView style={styles.root}>
      	<View style={styles.header}> 
	      	 <View style={styles.avatar}>
			    	
            { 
              //<Icon name={avatar} type="feather" size={24} color="#99f"/>
            }
  				</View>
      		<Text style={styles.headerText}> title </Text>
      	</View>
      	<View style={styles.content}> 
          {this.props.children}	
      	</View>
      </ScrollView>
    );
	}
}

const styles = StyleSheet.create({
  root: {
    width:330,
    alignSelf:'center',
    backgroundColor: theme.palette.primary.light,
    padding:20,
    marginTop:30,
    paddingBottom:30
  },
  header: {
    alignSelf: 'flex-start',
    flexDirection:'row',
		alignItems:'center',
  },
  headerText: {
    ...theme.header, 
  },
  content: {
  	justifyContent:'center',
  	width:'100%',
    alignSelf: 'flex-start',
    flexDirection:'column',
		alignItems:'flex-start',
  },
  avatar: {
  	margin:10,
		alignItems:'center',
		justifyContent:'center',
		width:80,
		height:80,
		borderRadius:100,
		backgroundColor:theme.palette.primary.midDark,
  },
});