import React, {useState} from 'react';
import {View, Text, FlatList, Image, Pressable} from 'react-native';
import base from '../../axios/Axios';
import NavBar from '../../components/NavBar';
import StatusBarMain from '../../components/StatusBarMain';
import {styles} from './Explore.style';
import SearchBar from '../../components/SearchBar';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import EmptyPage from '../../components/EmptyPage';
const Explore = ({route, navigation}) => {
  const {token} = route.params;
  const [skey, setSkey] = useState('');
  const [products, setProducts] = useState([]);
  const search = () => {
    Toast.show({
      type: 'info',
      text1: 'Wait for a second',
      position: 'bottom',
    });
    base
      .post('api/items/searchitem', {
        token: token,
        word: skey,
      })
      .then(Response => {
        setProducts(Response.data);
      })
      .catch(Error => {
        console.log(Error);
      });
  };
  const renderitem = ({item}) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('productdetails', {
            data: item,
          });
        }}>
        <View style={styles.card}>
          <View>
            <Image style={styles.image} source={{uri: item.image}} />
          </View>
          <View>
            <Text style={styles.itemname}>{item.itemname}</Text>
            <Text style={styles.itemcat}>{item.itemcategory}</Text>
            <Text style={styles.itemprice}>Rs. {item.itemprice}</Text>
          </View>
        </View>
      </Pressable>
    );
  };
  const header = () => {
    return (
      <View>
        <Text style={styles.heading}>
          Fount {products.length} results for "{skey}"
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBarMain />
      <SearchBar trigger={search} change={e => setSkey(e)} value={skey} />
      <View style={styles.searchresults}>
        {products.length !== 0 ? (
          <FlatList
            data={products}
            renderItem={renderitem}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={products.length !== 0 && header}
          />
        ) : (
          <EmptyPage
            label="No results"
            image={require('../../assets/nodata.png')}
          />
        )}
      </View>
      <NavBar active="explore" />
    </View>
  );
};

export default Explore;
