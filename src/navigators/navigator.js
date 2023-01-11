/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailPage from '../screens/DetailPage';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();

const AppRoute = ({navigators}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          options={{headerShown: false}}
          name="HomePage"
          component={HomePage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DetailPage"
          component={DetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
