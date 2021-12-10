import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import StatusBarMain from '../../components/StatusBarMain';

const SplashScreen = () => {
  return (
    <>
      <StatusBarMain />
      <View style={styles.container}>
        <Image source={require('../../assets/splashlogo.png')} />
      </View>
    </>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#53B175',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
