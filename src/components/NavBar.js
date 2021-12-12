import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const NavBar = ({active}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('home');
        }}>
        <Image style={styles.icon} source={require('../assets/store.png')} />
        {active === 'home' && <Text style={styles.icontext}>Shop</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('explore');
        }}>
        <Image style={styles.icon} source={require('../assets/explore.png')} />
        {active === 'explore' && <Text style={styles.icontext}>explore</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('cart');
        }}>
        <Image style={styles.icon} source={require('../assets/cart.png')} />
        {active === 'cart' && <Text style={styles.icontext}>cart</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('account');
        }}>
        <Image style={styles.icon} source={require('../assets/account.png')} />
        {active === 'account' && <Text style={styles.icontext}>account</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  active: {
    backgroundColor: 'red',
  },
  icontext: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Roboto-Regular',
  },
  icon: {
    alignSelf: 'center',
  },
});
