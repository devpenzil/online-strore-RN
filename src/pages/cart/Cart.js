import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import CartItem from '../../components/CartItem';
import NavBar from '../../components/NavBar';
import {styles} from './Cart.style';
import base from '../../axios/Axios';
import EmptyPage from '../../components/EmptyPage';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import PrimaryButton from '../../components/PrimaryButton';
import CheckOut from '../../components/CheckOut';
import Spacer from '../../components/Spacer';
import StatusBarMain from '../../components/StatusBarMain';
const Cart = ({route}) => {
  const {token, uemail} = route.params;
  console.log(token, uemail);
  const [cartItem, setCartItem] = useState([]);
  const [checkout, setcheckout] = useState(false);
  useEffect(() => {
    fetchcart();
  }, []);
  const fetchcart = () => {
    base
      .post('api/cart/getcart', {
        token: token,
        email: uemail,
      })
      .then(Response => {
        console.log(Response.data);
        setCartItem(Response.data);
      })
      .catch(Error => {
        console.log(Error);
      });
  };
  const clearcart = () => {
    Toast.show({
      type: 'info',
      text1: 'Wait for a second',
      position: 'bottom',
    });
    base
      .post('api/cart/clearcart', {
        token: token,
        email: uemail,
      })
      .then(Response => {
        console.log(Response.data);
        Toast.show({
          type: 'success',
          text1: 'Cart cleared',
          position: 'bottom',
        });
        fetchcart();
      })
      .catch(Error => {
        console.log(Error);
      });
  };
  let totalPrice = cartItem.reduce(function (accumulator, item) {
    return accumulator + item.total;
  }, 0);
  const cartitem = ({item}) => {
    return <CartItem data={item} />;
  };
  const cartfooter = () => {
    return (
      <View style={styles.buttons}>
        <PrimaryButton
          label={`Checkout (Total - ${totalPrice})`}
          triggerclick={() => {
            setcheckout(true);
          }}
        />
        <Pressable onPress={clearcart}>
          <Text style={styles.clear}>Clear cart</Text>
        </Pressable>
      </View>
    );
  };
  const closecheckout = () => {
    setcheckout(false);
  };
  return (
    <View style={styles.container}>
      <StatusBarMain />
      <FlatList
        data={cartItem}
        renderItem={cartitem}
        ListFooterComponent={cartItem.length !== 0 && cartfooter}
      />
      {cartItem.length === 0 && (
        <EmptyPage
          label="Cart is Empty"
          image={require('../../assets/emptycart.png')}
        />
      )}
      {checkout && (
        <CheckOut
          amount={totalPrice}
          close={closecheckout}
          token={token}
          umail={uemail}
        />
      )}
      <Spacer />
      <NavBar active="cart" />
    </View>
  );
};

export default Cart;
