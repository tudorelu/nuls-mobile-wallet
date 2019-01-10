//Authored by: Tudor Barbulescu (tudor.barbu7@gmail.com) ROMANIA + AUSTRALIA

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text, 
  TouchableOpacity,
  Image,
} from 'react-native';


import GenericScreen from '../../components/GenericScreen'
import PrimaryButton from '../../components/PrimaryButton'
import InputField from '../../components/InputField'
import TestInput from '../../components/TestInput'
import Card from '../../components/Card'

import theme from '../../theme';

class ReceiveScreen extends Component {

	constructor(props) {
	  super(props); 
		this.state = {address:'', amount:'', note:''};
	}

  render() {
    return (
    	<GenericScreen title="Receive Funds" avatar="download">

    		<InputField
    			label="Address"
    			onChangeText={(address) => this.setState({address})}
      		value={this.state.address}
      		icon="download"
    		/>

        <Image
          style={styles.image}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />

  			<PrimaryButton title="Back" onPress={() => console.log("Back Pressed")} />

    	</GenericScreen>
    );
  }
}

const styles = StyleSheet.create({

  button: {
  	...theme.primaryButton,
  },
  buttonText: {
  	...theme.buttonText,
  },
  image:{
  	...theme.walletQRImage,
  }
});


export default ReceiveScreen;