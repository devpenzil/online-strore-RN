import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import CartItem from '../../components/CartItem';
import NavBar from '../../components/NavBar';
import {styles} from './Cart.style';
import base, {token, cmail} from '../../axios/Axios';
import EmptyPage from '../../components/EmptyPage';
import PrimaryButton from '../../components/PrimaryButton';
const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [tamount, setTamount] = useState(0);
  useEffect(() => {
    base
      .post('api/cart/getcart', {
        token: token,
        email: cmail,
      })
      .then(Response => {
        console.log(Response.data);
        setCartItem(Response.data);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, []);
  useEffect(() => {
    cartItem.map(obj => {
      let temp = obj.count * obj.details.itemprice;
      setTamount(tamount + temp);
    });
    console.log(tamount);
  }, [cartItem]);
  const cartitem = ({item}) => {
    return <CartItem data={item} />;
  };
  const cartfooter = () => {
    let amount = 3400;
    return (
      <View>
        <PrimaryButton label={`Checkout (Total - ${tamount})`} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={cartItem}
          renderItem={cartitem}
          ListFooterComponent={cartItem.length !== 0 && cartfooter}
        />
        {cartItem.length === 0 && (
          <EmptyPage
            label="Empty cart"
            image={require('../../assets/emptycart.png')}
          />
        )}
      </ScrollView>
      <NavBar active="cart" />
    </View>
  );
};

export default Cart;
