import React, {useState} from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import Accordian from '../../components/Accordian';
import PrimaryButton from '../../components/PrimaryButton';
import StatusBarMain from '../../components/StatusBarMain';
import {styles} from './ProductDetails.style';
const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const data = {
    id: '-3NKbVZ0xygp_ePXzJ3on',
    itemname: 'Red Apple',
    itemprice: 140,
    itemdescription:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
    itemcategory: 'Fresh Fruits & Vegitables',
    image:
      'https://images.unsplash.com/photo-1610397962076-02407a169a5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
        <PrimaryButton label="Add to cart" />
      </View>
    </View>
  );
};

export default ProductDetails;
