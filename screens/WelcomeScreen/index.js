import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text,
} from 'react-native';

import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme';

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.root}>
      	<View style={styles.mainImage}>
			<Image 
				source={require('../../assets/images/Nuls.png')} 
				//style={{resizeMode:'center'}}
				/>
      	</View>

	    <Text style={styles.titleText}>
	    	Welcome To Nuls
	    </Text>


{
		// <View style={{width:30, borderBottomColor: 'white', borderBottomWidth: 1}}/>

	    // <Text style={styles.infoText}>
		   //  <Text>
		   //  	Mobile walled for the NULS blockchain. We're not holding your keys.
		   //  	This is serious business. Don't worry. Be happy. 
	    // 	</Text>
	    // 	<Text> Created by Tudor Barbulescu. CCC.</Text>
	    // </Text>
}
	    <PrimaryButton title="Create Wallet" onPress={() => {console.log("A")}} />
	    <PrimaryButton title="Import Wallet" onPress={() => this.props.navigation.navigate('App')} />

	    <View style={styles.footer}>
	     	<Text style={styles.footerText}> CCC. Created by Tudor Barbulescu.</Text>
	    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	root:{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor: theme.palette.primary.main,
	},

	mainImage:{
		justifyContent: 'center',
		alignItems:'center',
		//backgroundColor:'white',
		borderRadius:300,
		//borderColor:'white',
		//borderWidth: 2,
		width:290,
		height:290,
		margin:20,
		marginLeft: "auto", 
		marginRight: "auto"
	},
	titleText: {
	  	...theme.text,
	  	fontSize:30,
    	fontWeight: 'bold',
    	marginTop:30,
	  	margin:20,
	    textAlign:'left',
	},
	infoText: {
	  	...theme.text,
	  	marginLeft:20,
	  	marginRight:20,
	  	marginTop:20,
	  	marginBottom:30,
	    textAlign:'left',
	},
	footerText: {
	  	...theme.text,
	  	fontSize:12,
	},
  footer:{
  	justifyContent:'flex-end',
  	position:'absolute',
  	bottom:2,
  },
});


export default WelcomeScreen;