import React, {useState} from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import Accordian from '../../components/Accordian';
import PrimaryButton from '../../components/PrimaryButton';
import StatusBarMain from '../../components/StatusBarMain';
import {styles} from './ProductDetails.style';
import base, {token, cmail} from '../../axios/Axios';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const [disable, setDisable] = useState(false);
  const data = {
    id: '-3NKbVZ0xygp_ePXzJ3on',
    itemname: 'Kashmir Grapes',
    itemprice: 210,
    itemdescription:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
    itemcategory: 'Fresh Fruits & Vegitables',
    image:
      'https://images.unsplash.com/photo-1599819177626-b50f9dd21c9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXBlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  };
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
        email: cmail,
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
          text1: Response.data,
          position: 'bottom',
        });
        setDisable(false);
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
