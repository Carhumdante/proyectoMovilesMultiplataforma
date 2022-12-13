import React from 'react'
import { Text,View,Box, Center,Image, VStack, Button } from 'native-base'
import { Colors } from 'react-native-paper';
import Buttone from '../Components/Buttone';

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.blue200} safeAreaTop>
    <Center w="full" h={250} bg={Colors.blue200}>
    <Image source = {require("../../assets/images/logo.png")}
    alt="Logo"
    size="lg"
    />
    </Center>
    <VStack space={6} px={5} alignItems="center">
      <Buttone bg={Colors.black} color={Colors.white}>
        REGISTER
      </Buttone>
      <Buttone bg={Colors.white} color={Colors.black}>
        LOGIN
      </Buttone>
    </VStack>
    </Box>
  )
}

export default NotVerifyScreen;