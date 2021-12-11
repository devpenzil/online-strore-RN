import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const AuthHeader = ({heading, tagline}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logocolor.png')} />
      <Text style={styles.header}>{heading}</Text>
      <Text style={styles.tagline}>{tagline}</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    // paddingHorizontal: 60,
  },
  header: {
    fontSize: 26,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Roboto-Bold',
  },
  tagline: {
    color: '#000',
    fontFamily: 'Roboto-Regular',
  },
  image: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});
