/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('screen').scale;

export function HomeContainer({children}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: window + '5%',
    paddingTop: window + 10,
    backgroundColor: '#F8F8F8',
    //alignItems: 'center',
  },
});
