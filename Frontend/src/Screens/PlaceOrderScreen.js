import React from 'react'
import { Text,View,Box } from 'native-base'
import { Colors } from 'react-native-paper';
import { ScrollView } from 'react-native';
import OrderInfo from '../Components/OrderInfo';

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.blue200} flex={1} safeArea pt={6}>
        <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        
        >
          <OrderInfo/>
        </ScrollView>
    </Box>
  )
}

export default PlaceOrderScreen;