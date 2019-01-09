import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Picker,

} from 'react-native';

import GenericScreen from '../components/GenericScreen'
import PrimaryButton from '../components/PrimaryButton'
import InputField from '../components/InputField'

class CreateWalletScreen extends Component {
	constructor(props) {
	  super(props);
	  this.state = {walletType: 'new-wallet'};
	}

	_renderContent = () => {
		contents = []
		switch(this.state.walletType) {
		  case 'new-wallet':
		    contents.push(<PrimaryButton title="New Wallet" onPress={console.log("New Wallet")}/>);
		  case 'private-key':
				contents.push(<InputField label="Private Key"/>);
				break;
		  case 'encrypted-key':
				contents.push(<InputField label="Encryted Key"/>);
				contents.push(<InputField label="Passphrase" carretHidden/>);
		  	break;
		  default:
		   	break;
		}
	  
	  return contents;
	}

  render() {
    return (
    	<GenericScreen title="Add New Wallet" avatar="upload">
	      <Picker
				  selectedValue={this.state.walletType}
				  style={{ height: 50, width: 100 }}
				  onValueChange={(itemValue, itemIndex) => this.setState({walletType: itemValue})}>
				  <Picker.Item label="Create New Wallet" value="new-wallet" />
				  <Picker.Item label="Import Private Key" value="private-key" />
				  <Picker.Item label="Import Encrypted Key" value="encrypted-key" />
				</Picker>
				{this._renderContent()}
      </GenericScreen>
    );
  }
}

const styles = StyleSheet.create({

});


export default CreateWalletScreen;