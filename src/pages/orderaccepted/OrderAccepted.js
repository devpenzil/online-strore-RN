import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import StatusBarMain from '../../components/StatusBarMain';
import {styles} from './OrderAccepted.style';
import {useNavigation} from '@react-navigation/native';
const OrderAccepted = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBarMain transparent={true} />
      <Image source={require('../../assets/ordersuccess.png')} />
      <Text style={styles.head}>Your Order has been accepted</Text>
      <Text style={styles.tagline}>
        Your items has been placcd and is on it’s way to being processed
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate('home');
        }}>
        <Text style={styles.back}>Back to Home</Text>
      </Pressable>
    </View>
  );
};

export default OrderAccepted;
