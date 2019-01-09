//Authored by: Tudor Barbulescu (tudor.barbu7@gmail.com) ROMANIA + AUSTRALIA

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text, 
  TouchableOpacity
} from 'react-native';


import GenericScreen from '../components/GenericScreen'
import PrimaryButton from '../components/PrimaryButton'
import InputField from '../components/InputField'
import Card from '../components/Card'

import theme from '../theme';
class SendScreen extends Component {

	constructor(props) {
	  super(props); 
		this.state = {address:'', amount:'', note:''};
	}

  render() {
    return (
    	<GenericScreen title="Send Funds" avatar="upload">

    		<Card title="Wallet Value">$ 12,345.43</Card>
    		<Card title="Total">N 4,566.33</Card>

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
    			multiline
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

  			<PrimaryButton title="Send" />

    	</GenericScreen>
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


export default SendScreen;