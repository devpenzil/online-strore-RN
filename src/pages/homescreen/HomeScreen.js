import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './Homescreen.style';
import StatusBarMain from '../../components/StatusBarMain';
import NavBar from '../../components/NavBar';
import ProductRow from '../../components/ProductRow';
import Spacer from '../../components/Spacer';
import Banner from '../../components/Banner';
import SharedPreferences from 'react-native-shared-preferences';
const HomeScreen = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    SharedPreferences.getItem('token', function (value) {
      setToken(value);
    });
  }, []);
  console.log(token);
  return (
    <View style={styles.container}>
      <StatusBarMain />
      <ScrollView>
        <Banner />
        <ProductRow cat={'Fresh Fruits & Vegitables'} token={token} />
        <ProductRow cat={'Meat & Fish'} token={token} />
        <ProductRow cat={'Dairy & Eggs'} token={token} />
        <ProductRow cat={'Cooking Oil & Ghee'} token={token} />
      </ScrollView>
      <Spacer />
      <NavBar active="home" />
    </View>
  );
};

export default HomeScreen;
