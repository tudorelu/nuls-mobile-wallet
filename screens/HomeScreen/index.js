//Authored by: Tudor Barbulescu (tudor.barbu7@gmail.com) ROMANIA + AUSTRALIA

import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, View, TouchableOpacity, Platform, Image, ScrollView, FlatList, Text } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import CarouselCard from '../../components/CarouselCard';
import theme from '../../theme';

class HomeScreen extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
      walletData:{
        address: "Nse3uLgeCBWP48GCGh8L54gnELfpnSG9",
      },
	  	carouselData: [
		  	{title:"Wallet Value", text: "$ 12,345.33"},
		  	{title:"N Total", text: "5537"},
		  	{title:"N Available", text: "1200"}
		  ],
      transactionData: [
        {hash: "002080c9a67e649e57506efb0237e635012e8c25920bc4cd89fc1f05813404d2e037", block: 1578243, date: "2019-01-11 07:01:04", from: "Nse3uLgeCBWP48GCGh8L54gnELfpnSG9", to: "Nse1LLFRhk8moXrq8xfG2us1HEG1WFaf", type: "OUT", value: -300000.001, fee: 0.001},
        {hash: "002010af77853cd1f5c8bb7b80903db3ffae247b093d077c4d960606e83fd7768c7c", block: 1517939, date: "2019-01-04 07:27:26", from: "Nse3uLgeCBWP48GCGh8L54gnELfpnSG9", to: "Nsdw9nrc8Gftv8d1wK6L3orZYmqzV1RX", type: "OUT", value: -200000.001, fee: 0.001},
        {hash: "002060987f665ab3d1374129b3367b97486d451af3dd886396674bfddace069784fb", block: 1506759, date: "2019-01-03 00:23:32", from: "Nse3uLgeCBWP48GCGh8L54gnELfpnSG9", to: "Nsdw9nrc8Gftv8d1wK6L3orZYmqzV1RX", type: "OUT", value:      -1.001, fee: 0.001},
        {hash: "002004183874b0ea6efbeded0e1bc64418cf92c4947c20cbe4d044032b4d7e453885", block: 1328910, date: "2018-12-13 06:12:37", from: "Nse1LLFRhk8moXrq8xfG2us1HEG1WFaf", to: "Nse3uLgeCBWP48GCGh8L54gnELfpnSG9", type:  "IN", value:  500000.001, fee: 0.001},
        {hash: "00202c6393923a437e40372b096f3f87860c3a842842bc6bcbaeaf19bd8326323d8a", block: 1303511, date: "2018-12-10 05:54:30", from: "NsdyQG31QgXoyzUHqhLuqxyHpse52FWu", to: "Nse3uLgeCBWP48GCGh8L54gnELfpnSG9", type:  "IN", value:       1.001, fee: 0.001},
        {hash: "002063d6d51404aab69f17eb631030e39ce05e41bee4fb92002fcc784a6a6ecd84ab", block:  838585, date: "2018-10-16 10:17:41", from: "Nse3uLgeCBWP48GCGh8L54gnELfpnSG9", to: "Nse1LLFRhk8moXrq8xfG2us1HEG1WFaf", type: "OUT", value: -300000.001, fee: 0.001},
        {hash: "00202f5fe3d31160c1d427aa2e55157f20f6c4f9c3fc2844ef1bb5baa0baa3ba1ebe", block:  418261, date: "2018-08-28 09:38:04", from: "Nse3uLgeCBWP48GCGh8L54gnELfpnSG9", to: "Nse1LLFRhk8moXrq8xfG2us1HEG1WFaf", type: "OUT", value: -400000.001, fee: 0.001},
        {hash: "0020497b9bff027ada44372aa7d044a46e6ab60782334c2e1120d82bb95922df5472", block:  406982, date: "2018-08-27 02:15:58", from: "Nse3uLgeCBWP48GCGh8L54gnELfpnSG9", to: "Nse1LLFRhk8moXrq8xfG2us1HEG1WFaf", type: "OUT", value: -100000.001, fee: 0.001},
        {hash: "00207eac221078ed10f735e233174a99577424adcdad8819bd250cb0d3f468142831", block:  355391, date: "2018-08-21 02:48:05", from: "Nse3uLgeCBWP48GCGh8L54gnELfpnSG9", to: "Nse1LLFRhk8moXrq8xfG2us1HEG1WFaf", type: "OUT", value: -203458.801, fee: 0.001},
        {hash: "00207fe273c9dabd6e8f45c264a1719b108b1a6dac8d7979a3d159eb3a56d22a6b9f", block:  261991, date: "2018-08-10 05:55:44", from: "Nse3uLgeCBWP48GCGh8L54gnELfpnSG9", to: "Nse1LLFRhk8moXrq8xfG2us1HEG1WFaf", type: "OUT", value:  -63000.001, fee: 0.001},
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

  _renderCarouselItem ({item}) {
    return (
    	<CarouselCard title={item.title}> {item.text} </CarouselCard>
    );
  }

  _renderTx (item) {

    let tx = item.item
    let index = item.index
    var fr = tx.from + ""
    var tt = tx.to + ""
    var date = tx.date.substring(2, 16)
    return(
      <View key={tx.hash} style={[styles.txListItem, index%2===0?{backgroundColor:theme.palette.primary.main}:{}]}>
        {tx.type==="IN"
        ? <View style={styles.txIcon} >
            <Icon name='download' type="feather" size={16} color="#99f"/>
          </View>
        : <View style={styles.txIcon} >
            <Icon name='upload' type="feather" size={16} color="#99f"/>
          </View>
        }
        <View style={{flexDirection:'column'}}>
          <Text style={[styles.txItemElement, {fontWeight:'bold', fontSize: 17}]}> {date} </Text>
          {
            tx.type==="IN"
            ?<Text style={[styles.txItemElement]}> 
              from {fr.substring(0,8)+"..."} 
            </Text>
            :<Text style={[styles.txItemElement]}> 
              to {tt.substring(0,8)+"..."} 
            </Text>
          }
        </View>
        
        {/*<Text style={styles.txItemElement}> {tx.type === "IN"?"    IN":tx.type} </Text>*/}
        <Text style={[styles.txItemElement, {marginLeft:30, fontSize:15}, tx.value > 0?{color:theme.palette.green.main}:{color:theme.palette.red.main}]}> {tx.value} </Text>
      </View>); 
  }

  _renderListHeader(){
    return(
      <View style={[styles.txListItem, {backgroundColor:theme.palette.primary.midDark, marginTop: 20, width:'94%'}]}>
        <Text style={[styles.txItemElement, {width:90}]}>  Date </Text>
        <Text style={styles.txItemElement}>  From </Text>
        <Text style={styles.txItemElement}>    To </Text>
        {/*<Text style={styles.txItemElement}>  Type </Text>*/}
        <Text style={[styles.txItemElement, {width:90}]}> Value </Text>
      </View>); 
  }

  render() {
    return (
      <View style={styles.root}>

      {/* Wallet Info*/}
	      <Carousel
	        ref={(c) => { this._carousel = c; }}
	        data={this.state.carouselData}
	        renderItem={this._renderCarouselItem}
	        sliderWidth={400}
	        itemWidth={300}
      	/>

      {/* Transaction History */}
        <ScrollView style={styles.txListContainer}>
          <FlatList
            data={this.state.transactionData}
            keyExtractor={(item) => item.hash}
            renderItem={(item) => this._renderTx(item)}
            //ListHeaderComponent={() => this._renderListHeader()}
          >
          </FlatList>
        </ScrollView>

      {/* Bottom Nav */}  
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
    //alignSelf:'center',
    backgroundColor: theme.palette.primary.light,
    paddingBottom:10,
    paddingTop:20,
    //justifyContent:'center', 
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
  txIcon: {
    ...theme.avatar,
    width:30,
    height:30,
    borderRadius:0,
    backgroundColor:'transparent',
  },
  logo: {
		...theme.headerImage,
		backgroundColor:'white',
		borderRadius:100,
		width:40,
		height:40,
		marginLeft: "auto", 
		marginRight: "auto"
  },
  txListContainer:{
    width:'99%'//theme.defaultContainerWidth,
  },
  txListItem:{
    flexDirection:'row',
    height:60, 
  },
  txItemElement:{
    ...theme.text,
    fontWeight: 'normal',
    fontSize: 12,
    marginRight: 5,
  }
});

export default HomeScreen;