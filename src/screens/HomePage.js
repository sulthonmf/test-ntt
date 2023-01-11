/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {HomeContainer} from '../components/Layout';
import CardComp from '../components/Card';
import axios from 'axios';
import ProductList from '../../product.json';
import {useNavigation} from '@react-navigation/native';
import {Chip} from 'react-native-paper';

let limit = 5;

const HomePage = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0, 5);

  useEffect(() => {
    getData();
  }, [data]);

  const getData = () => {
    console.log(data);
    setData(ProductList);
    setOffset(offset + 1);
  };

  const renderMore = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  const productView = item => {
    return (
      <CardComp
        click={() => navigation.navigate('DetailPage', {data: item})}
        imagesUri={item.item.thumbnail}
        title={item.item.title}
        subtitle={item.item.category}
        review={item.item.review}
        rating={item.item.rating}
        price={item.item.price}
      />
    );
  };

  const getDetail = product => {};

  return (
    <HomeContainer>
      <Text style={{fontSize: 25, color: 'black', fontWeight: '600'}}>
        Product List
      </Text>
      <Text>Sort By</Text>
      <View style={{flexDirection: 'row'}}>
        <Chip
        style={{marginRight: 5}}
          onPress={() =>
            setData(
              ProductList.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
            )
          }>
          Lowest to highest price
        </Chip>
        <Chip
          onPress={() =>
            setData(
              ProductList.products.sort((a, b) => (a.price < b.price ? 1 : -1)),
            )
          }>
          Highest to lowest price
        </Chip>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          initialNumToRender={5}
          data={data.products}
          renderItem={item => productView(item)}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={100}
          windowSize={5}
          ListFooterComponent={renderMore}
        />
      </SafeAreaView>
    </HomeContainer>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
