import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SecondScreen} from './screens';

const Stack = createNativeStackNavigator();

export const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Second" component={SecondScreen} />
  </Stack.Navigator>
);
