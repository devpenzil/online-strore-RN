import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MenuItem from '../../components/MenuItem';
import Spacer from '../../components/Spacer';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useNavigation} from '@react-navigation/native';

const AccountMenu = () => {
  const navigation = useNavigation();
  const logout = () => {
    navigation.navigate('onboard');
    Toast.show({
      type: 'success',
      text1: 'Logged Out',
      position: 'bottom',
    });
  };
  const unavailable = () => {
    Toast.show({
      type: 'error',
      text1: 'This feature is unavailable now',
      position: 'bottom',
    });
  };
  return (
    <View style={styles.container}>
      <MenuItem
        label="Orders"
        icon={require('../../assets/order.png')}
        triggerclick={unavailable}
      />
      <MenuItem
        label="My Details"
        icon={require('../../assets/mydetails.png')}
        triggerclick={unavailable}
      />
      <MenuItem
        label="Delivery Address"
        icon={require('../../assets/deliveraddress.png')}
        triggerclick={unavailable}
      />
      <MenuItem
        label="Payment Methods"
        icon={require('../../assets/paymentmethod.png')}
        triggerclick={unavailable}
      />
      <MenuItem
        label="Promo Cards"
        icon={require('../../assets/promocard.png')}
        triggerclick={unavailable}
      />
      <MenuItem
        label="Notification"
        icon={require('../../assets/notification.png')}
        triggerclick={unavailable}
      />
      <MenuItem
        label="Help"
        icon={require('../../assets/help.png')}
        triggerclick={unavailable}
      />
      <MenuItem
        label="About"
        icon={require('../../assets/about.png')}
        triggerclick={unavailable}
      />
      <MenuItem
        label="Logout"
        icon={require('../../assets/logout.png')}
        triggerclick={logout}
      />
      <Spacer />
    </View>
  );
};

export default AccountMenu;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
});
