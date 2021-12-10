import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import StatusBarMain from '../../components/StatusBarMain';
import {setItem, getItem} from 'react-native-shared-preferences';
import {styles} from './Onboard.style';
const Onboard = () => {
  const testfunction = () => {
    setItem('key', 12);
    alert(getItem('key'));
  };
  return (
    <ImageBackground source={require('../../assets/onboardbg.png')}>
      <View style={styles.container}>
        <StatusBarMain transparent={true} />
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
          <Text style={styles.head}>Welcome to our store</Text>
          <Text style={styles.tagline}>
            Ger your groceries in as fast as one hour
          </Text>
          <View style={{marginVertical: 20}}>
            <PrimaryButton label="Get started" triggerclick={testfunction} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Onboard;
