import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/profileimg.png')} />
      </View>
      <View>
        <Text style={styles.pname}>Ajo Alex</Text>
        <Text style={styles.pemail}>qa1@yopmail.com</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  pname: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    fontFamily: 'Roboto-Bold',
  },
  pemail: {
    marginLeft: 20,
    color: '#7C7C7C',
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
  },
});
