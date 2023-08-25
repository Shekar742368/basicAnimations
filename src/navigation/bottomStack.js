/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../login';
import Settings from '../components/Settings';
import HomeScreen from '../components/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppStack from './appStack';

const BottomStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Calculations"
      activeColor="blue"
      barStyle={{
        backgroundColor: 'red',
        borderRadius: 90,
        marginHorizontal: 40,
        height: '10%',
      }}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Calculations"
        component={AppStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <AntDesign name="calculator" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;
