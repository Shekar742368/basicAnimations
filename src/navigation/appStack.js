import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SimpleInterestCalculator from '../components/Calculations/SimpleInterestCal';
import CalculationsList from '../components/Calculations';
import CalculateAreas from '../components/Calculations/AreaCal';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CalculationsList" component={CalculationsList} />
      <Stack.Screen
        name="SimpleInterestCalculator"
        component={SimpleInterestCalculator}
      />
      <Stack.Screen name="CalculateAreas" component={CalculateAreas} />
    </Stack.Navigator>
  );
};

export default AppStack;
