import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Homescreen.style';
import StatusBarMain from '../../components/StatusBarMain';
import NavBar from '../../components/NavBar';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBarMain />
      <Text>Hello world</Text>
      <NavBar active="home" />
    </View>
  );
};

export default HomeScreen;
