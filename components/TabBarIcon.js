import React from 'react';
import Colors from '../constants/Colors';
import {View} from 'react-native'; 
//import { Ionicons } from '@expo/vector-icons';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View >
      {/*
      <Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
      */}
      </View>
    );
  }
}