import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.imaage} source={require('../assets/banner.png')} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  imaage: {
    alignSelf: 'center',
    width: '100%',
  },
});
