
import { Center, Text } from 'native-base'
import React from 'react'
import { Colors } from 'react-native-paper';

const OrderInfo = ({icon,tittle,subTitle,tex,success,danger}) => {
  return (
    <Center 
    bg={Colors.white} 
    w={200} 
    py={2} 
    rounded={10} 
    mb={2} 
    ml={5} 
    mr={1} 
    px={4}
    >
      <Text>OrderInfo</Text>
      </Center>
  );
};

export default OrderInfo