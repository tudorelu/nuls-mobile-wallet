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

import { Icon } from 'react-native-elements'
import theme from '../../theme';

class ReceiveScreen extends Component {
  
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      title:'Receive',
      headerTitle:  
        <View style={styles.logo} >
          <Icon name="download" type="feather" size={24} color="#99f"/>
        </View>,
      headerStyle: {
        alignItems:'center',
      },
      headerLeft: 
        <TouchableOpacity onPress={ () => navigation.goBack() }>
          <Icon
            name='arrow-left'
            type='feather'
            color='#FFF'
            containerStyle={{marginRight:14, marginLeft:14}}
            size={24}
          />
        </TouchableOpacity>,
      headerRight: 
        <TouchableOpacity onPress={ () => navigation.navigate('Share') }>
          <Icon
            name='share-2'
            type='feather'
            color='#FFF'
            containerStyle={{marginRight:14, marginLeft:14}}
            size={24}
          />
        </TouchableOpacity>,
      headerStyle: {
        backgroundColor: theme.palette.primary.light,
        paddingTop:0,
        marginTop: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    };
  };

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
  },
  logo: {
    ...theme.headerImage,
    borderRadius:100,
    width:40,
    height:40,
    marginLeft: "auto", 
    marginRight: "auto"
  }
});


export default ReceiveScreen;