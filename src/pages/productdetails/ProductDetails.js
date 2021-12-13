import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import Accordian from '../../components/Accordian';
import PrimaryButton from '../../components/PrimaryButton';
import StatusBarMain from '../../components/StatusBarMain';
import {styles} from './ProductDetails.style';
import base from '../../axios/Axios';
import SharedPreferences from 'react-native-shared-preferences';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
const ProductDetails = ({route, navigation}) => {
  const [token, setToken] = useState('');
  const [uemail, setUemail] = useState('');
  useEffect(() => {
    SharedPreferences.getItem('token', function (value) {
      setToken(value);
    });
    SharedPreferences.getItem('email', function (value) {
      setUemail(value);
    });
  }, []);
  const {data} = route.params;
  const [count, setCount] = useState(1);
  const [disable, setDisable] = useState(false);
  const addtocart = () => {
    setDisable(true);
    Toast.show({
      type: 'info',
      text1: 'Wait for a second',
      position: 'bottom',
    });
    base
      .post('api/cart/addtocart', {
        token: token,
        email: uemail,
        newitem: {
          details: data,
          count: count,
          total: data.itemprice * count,
        },
      })
      .then(Response => {
        console.log(Response);
        Toast.show({
          type: 'success',
          text1: 'Added to cart',
          position: 'bottom',
        });
        setDisable(false);
        navigation.navigate('home');
      })
      .catch(Error => {
        Toast.show({
          type: 'error',
          text1: Error.message,
          position: 'bottom',
        });
        setDisable(false);
      });
  };
  return (
    <View style={styles.container}>
      <StatusBarMain transparent={true} />
      <ScrollView>
        <View>
          <Image style={styles.image} source={{uri: data.image}} />
        </View>
        <View style={styles.content}>
          <Text style={styles.itemname}>{data.itemname}</Text>
          <Text style={styles.categ}>{data.itemcategory}</Text>
          <View style={styles.contentboxtwo}>
            <View style={styles.counterBox}>
              <Pressable
                onPress={() => {
                  count > 1 && setCount(count - 1);
                }}>
                <Text style={styles.counterbutton}>-</Text>
              </Pressable>
              <Text style={styles.count}> {count}</Text>
              <Pressable
                onPress={() => {
                  setCount(count + 1);
                }}>
                <Text style={styles.counterbutton}>+</Text>
              </Pressable>
            </View>
            <View>
              <Text style={styles.amount}>Rs. {data.itemprice * count}</Text>
            </View>
          </View>
          <View>
            <Accordian head="Description" desc={data.itemdescription} />
            <Accordian head="Nutrition" desc={data.itemdescription} />
            <Accordian head="Review" desc={data.itemdescription} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <PrimaryButton
          disabled={disable}
          label="Add to cart"
          triggerclick={addtocart}
        />
      </View>
    </View>
  );
};

export default ProductDetails;
