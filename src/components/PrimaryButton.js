import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const PrimaryButton = ({label, triggerclick}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={triggerclick}>
        <Text style={styles.buttontext}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#53B175',
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 15,
    borderRadius: 15,
  },
  buttontext: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
