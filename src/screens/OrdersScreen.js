import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActiveOrder from '../components/ActiveOrder';
import PreviousOrder from '../components/PreviousOrder';
const Tab = createMaterialTopTabNavigator();
const OrdersScreen=()=>{
    return(
      <Tab.Navigator>
      <Tab.Screen name="Active" component={ActiveOrder} />
      <Tab.Screen name="Previous" component={PreviousOrder} />
    </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default OrdersScreen;