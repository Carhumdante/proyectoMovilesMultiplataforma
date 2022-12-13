import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSreen from '../Screens/HomeScreen';
import SingleProductScreen from '../Screens/SingleProductScreen';
import ShippingScreen from '../Screens/ShippingScreen';
import PlaceOrderScreen from '../Screens/PlaceOrderScreen';
import PaymentScreen from '../Screens/PaymentScreen';

const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator 
    initialRouteName="Home" 
    screenOptions={{
    headerShown: false,
    }}
    >
      <Stack.Screen name="Home" component={HomeSreen}/>
      <Stack.Screen name="Single" component={SingleProductScreen}/>
      <Stack.Screen name="Shipping" component={ShippingScreen}/>
      <Stack.Screen name="Checkout" component={PaymentScreen}/>
      <Stack.Screen name="Paceorder" component={PlaceOrderScreen}/>

    </Stack.Navigator>
  );
};

export default StackNav;