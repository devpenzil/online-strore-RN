import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const EmptyPage = ({label, image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default EmptyPage;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  container: {
    width: '100%',
    marginVertical: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});
