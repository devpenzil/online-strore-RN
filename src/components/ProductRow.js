import React, {useEffect, useState} from 'react';
import base, {token} from '../axios/Axios';
import {FlatList, Image, StyleSheet, Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const ProductRow = ({cat}) => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const onpress = data => {
    navigation.navigate('productdetails', {
      data: data,
    });
  };
  useEffect(() => {
    base
      .post('api/items/getbycategory', {
        token: token,
        category: cat,
      })
      .then(Response => {
        // console.log(Response.data);
        setProducts(Response.data);
      })
      .catch(Error => {
        console.log(Error);
      });
  });
  const renderItem = ({item}) => {
    return (
      <Pressable
        onPress={() => {
          onpress(item);
        }}>
        <View style={styles.card}>
          <Image source={{uri: item.image}} style={styles.image} />
          <Text style={styles.itemname}>{item.itemname}</Text>
          <Text style={styles.kg}>1 kg, Price</Text>
          <Text style={styles.price}>Rs. {item.itemprice}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {products.length !== 0 && <Text style={styles.heading}>{cat}</Text>}
      <FlatList
        data={products}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductRow;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
  },
  card: {
    width: 173,
    height: 248,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 173,
    height: 150,
    overflow: 'hidden',
  },
  heading: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
    fontWeight: '600',
  },
  itemname: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 10,
  },
  kg: {
    color: '#000',
    fontSize: 14,
    marginLeft: 10,
  },
  price: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
    marginTop: 5,
    textAlign: 'right',
  },
});
