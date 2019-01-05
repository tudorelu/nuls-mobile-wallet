
//Authored by: Tudor Barbulescu (tudor.barbu7@gmail.com) ROMANIA + AUSTRALIA

import React, { Component } from 'react';

import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import InputField from '../components/InputField';

import theme from '../theme';

export default class SendScreen extends Component {
	constructor(props){
		super(props);
		this.state = {address:'', amount:'', note:''};
	}

	render(){
		return (
      <View style={styles.root}>
      	<View style={styles.header}> 
	      	 <View
					   style={styles.avatar}>
			    	<Icon name="upload" size={24} color="#99f"/>
  				</View>
      		<Text style={styles.headerText}> Send Funds </Text>
      	</View>
      	<View style={styles.content}> 

      		<InputField
      			label="Address Receiver"
      			onChangeText={(address) => this.setState({address})}
        		value={this.state.address}
      		/>
      		<InputField
      			label="Amount"
      			onChangeText={(amount) => this.setState({amount})}
        		value={this.state.amount}
      		/>
      		<InputField
      			label="Note"
      			multiline={true}
      			placeholder="Enter Here"
      			placeholderTextColor="rgba(255,255,255,0.3)"
      			numberOfLines={4}
      			onChangeText={(note) => this.setState({note})}
        		value={this.state.note}
      		/>

      		<TouchableOpacity 
      			style={styles.button}
      			onPress={() => console.log("Press")}
      		>
      			<Text style={styles.buttonText}> Send </Text>
    			</TouchableOpacity>
      	</View>
      </View>
    );
	}
}

const styles = StyleSheet.create({
  root: {
    width:330,
    alignSelf:'center',
    backgroundColor: theme.palette.primary.light,
    padding:20,
    marginTop:50,
    marginBottom:30
  },
  header: {
    alignSelf: 'flex-start',
    flexDirection:'row',
		alignItems:'center',
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
  button: {
  	...theme.primaryButton,
  	margin:5,
  	marginBottom: 10,
  	marginTop:20,
  	alignSelf:'flex-end',
  	justifyContent:'center',
  	alignSelf:'center',
  	width:'100%',
  },
  buttonText: {
  	...theme.buttonText,
  	alignSelf:'center',
  	padding: 5,
  },
  headerText: {
  	...theme.header, 
  },
});