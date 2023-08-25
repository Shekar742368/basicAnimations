import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomStack from './bottomStack';

const AppNav = () => {
  return (
    <NavigationContainer>
      <BottomStack />
    </NavigationContainer>
  );
};

export default AppNav;
