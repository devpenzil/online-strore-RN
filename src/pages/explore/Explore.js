import React from 'react';
import {View, Text} from 'react-native';
import NavBar from '../../components/NavBar';
import StatusBarMain from '../../components/StatusBarMain';
import {styles} from './Explore.style';
const Explore = () => {
  return (
    <View style={styles.container}>
      <StatusBarMain />
      <Text>Explore</Text>
      <NavBar active="explore" />
    </View>
  );
};

export default Explore;
