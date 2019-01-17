//Authored by: Tudor Barbulescu (tudor.barbu7@gmail.com) ROMANIA + AUSTRALIA

import React, { Component } from 'react';

import { Icon } from 'react-native-elements';
import { StyleSheet, View, TouchableOpacity, Platform, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import Card from '../../components/Card';

import theme from '../../theme';

class HomeScreen extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	  	carouselData: [
		  	{title:"Wallet Value", text: "$ 12,345.33"},
		  	{title:"N Total", text: "5537"},
		  	{title:"N Available", text: "1200"}
		  ]
	  };
	}

	static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
    	headerTitle:  
				<View style={styles.logo} >
		      <Image
		        source={require('../../assets/images/Nuls.png')}
		        style={{ resizeMode:'center'}}
		      />
        </View>,
      headerStyle: {
        alignItems:'center',
      },
      headerLeft: 
        <TouchableOpacity onPress={ () => navigation.navigate('Menu') }>
          <Icon
            name='menu'
            type='feather'
            color='#FFF'
            containerStyle={{marginRight:14, marginLeft:14}}
            size={24}
          />
        </TouchableOpacity>,
      headerRight: 
        <TouchableOpacity onPress={ () => navigation.navigate('Settings') }>
          <Icon
            name='settings'
            type='feather'
            color='#FFF'
            containerStyle={{marginRight:14, marginLeft:14}}
            size={24}
          />
        </TouchableOpacity>,
      headerStyle: {
        /*
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,*/
      	backgroundColor: theme.palette.primary.dark,
      },
    };
  };

  _renderItem ({item}) {
    return (
    	<Card title={item.title}> {item.text} </Card>
    );
  }

  render() {
    return (
      <View style={styles.root}>

	      <Carousel
	        ref={(c) => { this._carousel = c; }}
	        data={this.state.carouselData}
	        renderItem={this._renderItem}
	        sliderWidth={400}
	        itemWidth={300}
      	/>

      	<View style={styles.bottomButtons}>
	      	<TouchableOpacity onPress={() => this.props.navigation.navigate("Send")}> 
	      		<View style={styles.avatar} >
	          	<Icon name='upload' type="feather" size={20} color="#99f"/>
	          </View>
	      	</TouchableOpacity>

	      	<TouchableOpacity onPress={() => this.props.navigation.navigate("Receive")}>
	      		<View style={styles.avatar} >
	          	<Icon name='download' type="feather" size={20} color="#99f"/>
	        	</View>
	        </TouchableOpacity>

	      	<TouchableOpacity onPress={() => this.props.navigation.navigate("CreateWallet")}> 
	      		<View style={styles.avatar} >
	          	<Icon name='plus' type="feather" size={20} color="#99f"/>
	          </View>
	      	</TouchableOpacity>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex:1,
    width:'100%',
    alignSelf:'center',
    backgroundColor: theme.palette.primary.light,
    paddingBottom:30,
    paddingTop:30,
    justifyContent:'center', 
    alignItems:'center'
  },
  bottomButtons:{
  	flexDirection:'row',
  	justifyContent:'flex-end', 
    alignItems:'flex-end'
  },
  avatar: {
  	...theme.avatar,
  	width:40,
  	height:40,
  },
  logo: {
		...theme.headerImage,
		backgroundColor:'white',
		borderRadius:100,
		width:40,
		height:40,
		marginLeft: "auto", 
		marginRight: "auto"
  }
});

export default HomeScreen;