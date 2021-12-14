import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SearchResult = data => {
  const {image} = data.data;
  console.log(data.image);
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <View>
        <Text>{data.itemname}</Text>
      </View>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
