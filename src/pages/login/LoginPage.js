import React from 'react';
import {View, Text} from 'react-native';
import AuthHeader from '../../components/AuthHeader';
import StatusBarMain from '../../components/StatusBarMain';
import {styles} from './LoginPage.style';
const LoginPage = () => {
  return (
    <View style={styles.container}>
      <StatusBarMain />
      <AuthHeader heading="Login" tagline="Enter your emails and password" />
    </View>
  );
};

export default LoginPage;
