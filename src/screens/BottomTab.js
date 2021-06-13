import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import OrdersScreen from './OrdersScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import LocationScreen from './LocationScreen';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTab(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        barStyle={{ backgroundColor:'#e67300'}}
        >
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen
        name="Order"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-settings" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen
        name="location"
        component={LocationScreen}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker-outline" color={color} size={26} />
          ),
        }}
        />
        </Tab.Navigator>
    )
}
