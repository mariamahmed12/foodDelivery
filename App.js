import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './src/screens/BottomTab'
import MenuScreen from './src/screens/MenuScreen';

const stack =createStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
     <stack.Navigator
     initialRouteName="Taps"
     headerMode="screen"
     screenOptions={{
       headerTintColor: 'white',
       headerStyle: { backgroundColor: '#e67300' },
       headerTitle:'Food Delivery',
       headerTitleAlign:"center"
      
     }}
     >
      <stack.Screen name="Taps" component={BottomTab}/>
      <stack.Screen name="Menu" component={MenuScreen}/>
     </stack.Navigator>
    </NavigationContainer>
  );
}


