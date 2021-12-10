import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './Homescreen.style';
import StatusBarMain from '../../components/StatusBarMain';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBarMain />
      <ScrollView>
        <SearchBar />
      </ScrollView>
      <NavBar active="home" />
    </View>
  );
};

export default HomeScreen;
