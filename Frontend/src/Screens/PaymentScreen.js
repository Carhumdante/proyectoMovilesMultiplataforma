import React from 'react'
import { Center, Text,View, Box, Image, ScrollView, VStack, FormControl, Input, HStack, Spacer } from 'native-base'
import { Colors } from 'react-native-paper';
import Buttone from '../Components/Buttone';
import {Ionicons} from "@expo/vector-icons"

const paymentMethodes =[
  {
    Image:"../../assets/images/paypal.png",
    alt:"paypal",
    icon:"Ionicons"
  },

]


function PaymentScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.blue200} py={5}>
    {/*Header*/}
    <Center pb={15}>
      <Text color={Colors.white} fontSize={14} bold> 
      PAYMENT METHOD
      </Text>
      </Center>
      {/*Selection*/}
      <Box h='full' bg={Colors.blue200} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethodes.map((i,index)=>(
                 <HStack 
                 key={index}
         alignItems='center' 
         bg={Colors.white} 
         px={3} 
         py={1} 
         justifyContent="space-between"
         rounden={10}
         
         >
          <Box>
            <Image source={require("../../assets/images/paypal.png")}
            alt="paypal" resizeMode="contain" 
            w={60} 
            h={50}
            />
      
          </Box>

          
          <Ionicons name="checkmark-circle" size={30} color={Colors.blue300}/>
         </HStack>
            ))}
      

            <Buttone bg={Colors.blue400} color={Colors.white}>
          CONTINUE</Buttone>
          <Text italic textAlign="center" bold>
            Payment method is paypal by default
          </Text>
           
          </VStack>
        </ScrollView>
      </Box>
  </Box>
  )
}

export default PaymentScreen;