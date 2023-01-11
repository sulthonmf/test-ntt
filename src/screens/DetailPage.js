/* eslint-disable prettier/prettier */
import {Text, TouchableHighlight, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card, Chip} from 'react-native-paper';
import {HomeContainer} from '../components/Layout';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment/moment';

const DetailPage = ({route, navigation}) => {
  const {data} = route.params;

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    getFavorite();
  }, [favorite]);

  const getFavorite = async () => {
    try {
      const item = await AsyncStorage.getItem('itemId');
      if (item == data.item.id) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    } catch (error) {}
  };

  const newComponent = () => {
    if (
      moment(moment(data.item.created_at).format('DD/MM/YYYY')).isSame(
        new Date(),
        'week',
      )
    ) {
      return <Chip>NEW</Chip>;
    }
  };

  const bestComponent = () => {
    if (data.item.review >= 20 && data.item.rating >= 4) {
      return <Chip>BEST SELLER</Chip>;
    }
  };

  const hotComponent = () => {
    if (
      moment(moment(data.item.created_at).format('DD/MM/YYYY')).isSame(
        new Date(),
        'week',
      ) &&
      data.item.review > 20 &&
      data.item.rating > 4
    ) {
      return <Chip>HOT ITEM</Chip>;
    }
  };

  const addFavorite = async () => {
    if (favorite == false) {
      try {
        await AsyncStorage.setItem('itemId', data.item.id.toString());
        setFavorite(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await AsyncStorage.setItem('itemId', '');
        setFavorite(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <HomeContainer>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          fontWeight: '800',
          paddingVertical: 10,
        }}>
        Product Description
      </Text>
      <Card>
        <Card.Cover source={{uri: data.item.thumbnail}} />
        <Card.Title
          title={data.item.title}
          titleStyle={{
            fontSize: 28,
            fontWeight: '800',
            paddingVertical: 10,
          }}
          right={props => (
            <MaterialIcons
              {...props}
              size={25}
              name="favorite"
              color={favorite ? 'red' : 'black'}
              onPress={() => addFavorite()}
            />
          )}
        />
        <Card.Content>
          <Text style={{fontSize: 15, color: 'black'}}>
            {data.item.description}
          </Text>
        </Card.Content>
      </Card>
      <View style={{flexDirection: 'row', padding: 5}}>
        <View>{newComponent()}</View>
        <View>{bestComponent()}</View>
        <View>{hotComponent()}</View>
      </View>
    </HomeContainer>
  );
};

export default DetailPage;
