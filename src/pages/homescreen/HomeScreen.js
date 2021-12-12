import React from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './Homescreen.style';
import StatusBarMain from '../../components/StatusBarMain';
import NavBar from '../../components/NavBar';
import ProductRow from '../../components/ProductRow';
import Spacer from '../../components/Spacer';
import Banner from '../../components/Banner';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBarMain />
      <ScrollView>
        <Banner />
        <ProductRow cat={'Fresh Fruits & Vegitables'} />
        <ProductRow cat={'Meat & Fish'} />
        <ProductRow cat={'Dairy & Eggs'} />
        <ProductRow cat={'Cooking Oil & Ghee'} />
      </ScrollView>
      <Spacer />
      <NavBar active="home" />
    </View>
  );
};

export default HomeScreen;
