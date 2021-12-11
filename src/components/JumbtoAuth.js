import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const JumbtoAuth = ({label, tag, triggerclick}) => {
  return (
    <View>
      <TouchableOpacity onPress={triggerclick}>
        <Text style={styles.text}>
          {label}
          <Text style={styles.color}>{tag}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default JumbtoAuth;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontWeight: '800',
    fontFamily: 'Roboto-Regular',
  },
  color: {
    color: '#53B175',
    fontFamily: 'Roboto-Regular',
  },
});
