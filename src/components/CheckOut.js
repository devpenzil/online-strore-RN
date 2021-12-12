import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import Accordian from './Accordian';
import PrimaryButton from './PrimaryButton';
import {useNavigation} from '@react-navigation/native';
const CheckOut = ({amount, close}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Accordian head="Deliver Address" desc="your home address" />
          <Accordian head="Payment" desc="Cash on Delivery" />
          <Accordian head="Promo code" desc="Not Applicable" />
          <Accordian head="Total Amount" desc={`Rs. ${amount}`} />
          <View style={styles.buton}>
            <PrimaryButton
              label="Place order"
              triggerclick={() => {
                navigation.navigate('orderaccepted');
              }}
            />
          </View>
          <Pressable onPress={close}>
            <Text style={styles.close}>close</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  buton: {
    marginTop: 10,
  },
  close: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});
