import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CartItem = ({data}) => {
  const {id, image, itemcategory, itemdescription, itemname, itemprice} =
    data.details;
  const {count} = data;
  return (
    <View style={styles.container}>
      <View style={styles.smallbox}>
        <Image style={styles.image} source={{uri: image}} />
        <View>
          <Text style={styles.itemname}>{itemname}</Text>
          <Text style={styles.count}>count: {count}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.amount}>Rs. {itemprice * count}</Text>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 20,
  },
  amount: {
    fontSize: 20,
    fontFamily: 'Roboto-Black',
    color: '#000',
  },
  smallbox: {
    display: 'flex',
    flexDirection: 'row',
  },
  itemname: {
    fontSize: 18,
    fontFamily: '600',
    color: '#000',
  },
  count: {
    color: '#000',
    fontWeight: '600',
  },
});
