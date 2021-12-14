import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SearchBar = ({trigger, change, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbox}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          onBlur={trigger}
          onChangeText={change}
          value={value}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginTop: 10,
  },
  searchbox: {
    width: '90%',
    backgroundColor: '#F2F3F2',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
