import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const MenuItem = ({label, icon, triggerclick}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={triggerclick}>
      <View style={styles.firstbox}>
        <Image source={icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <View>
        <Image source={require('../assets/rightarrow.png')} />
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#181725',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
  },
  firstbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
