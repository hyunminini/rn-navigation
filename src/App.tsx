import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigatoer from './Navigators/HomeStackNavigators';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigatoer />
    </NavigationContainer>
  );
}
