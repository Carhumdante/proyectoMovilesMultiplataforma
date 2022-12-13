
import React from 'react'
import { Box, Center,Text } from 'native-base';
import { Colors } from 'react-native-paper';
import {FontAwesome} from "@expo/vector-icons";
import Buttone from "./Buttone";

const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
      <Center h='90%'>
        <Center w={200} h={200} bg={Colors.white} rounded="full">
            <FontAwesome 
            name="shopping-basket" 
            size={64} color={Colors.blue200}/>
        </Center>
        <Text color={Colors.blue200} bold mt={5}>
            CART IS EMPTY
        </Text>
      </Center>
      <Buttone bg={Colors.black} color={Colors.white}>
      START SHOPPING
      </Buttone>
    </Box>
  );
};

export default CartEmpty