import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';

const CardComp = ({
  title,
  subtitle,
  review,
  price,
  rating,
  imagesUri,
  click,
}) => {
  return (
    <TouchableOpacity onPress={click}>
      <View style={{paddingVertical: 5}}>
        <Card>
          <View style={{marginVertical: 5}}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Card.Cover
                    style={{width: 100, height: 70, padding: 2}}
                    source={{
                      uri: imagesUri,
                    }}
                  />
                  <View style={{marginHorizontal: 10}}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      {title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}>
                      {subtitle}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <StarRating
                        rating={rating}
                        starSize={15}
                        style={{width: 10, marginHorizontal: -8}}
                      />
                    </View>

                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: '400',
                      }}>
                      Total Review({review !== 0 ? review : 'No Review'})
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    padding: 4,
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  $.{price}
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

export default CardComp;
