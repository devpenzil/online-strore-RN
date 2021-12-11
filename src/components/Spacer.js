import React from 'react';
import {StyleSheet, View} from 'react-native';

const Spacer = () => {
  return <View style={styles.container} />;
};

export default Spacer;

const styles = StyleSheet.create({
  container: {
    height: 80,
  },
});
