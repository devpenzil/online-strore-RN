import React from 'react';
import {View, ScrollView} from 'react-native';
import NavBar from '../../components/NavBar';
import Profile from '../../components/Profile';
import StatusBarMain from '../../components/StatusBarMain';
import {styles} from './Account.style';
import AccountMenu from './AccountMenu';
const Account = () => {
  return (
    <View style={styles.container}>
      <StatusBarMain />
      <Profile />
      <ScrollView>
        <AccountMenu />
      </ScrollView>
      <NavBar active="account" />
    </View>
  );
};

export default Account;
