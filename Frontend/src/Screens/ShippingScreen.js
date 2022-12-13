import React from 'react'
import { Center, Text,View, Box, ScrollView, VStack, FormControl, Input } from 'native-base'
import { Colors } from 'react-native-paper';
import Buttone from '../Components/Buttone';
import { useNavigation } from '@react-navigation/native';


const ShippingInputs =[
  {
    label:"ENTER CITY",
    type:"text",
  },
  {
    label:"ENTER COUNT",
    type:"text",
  },
  {
    label:"ENTER POSTAL CODE",
    type:"text",
  },
  {
    label:"ENTER ADRESS",
    type:"text",
  },
  
]

function ShippingScreen() {

  const navigation = useNavigation()

  return (
    <Box flex={1} safeAreaTop bg={Colors.blue200} py={5}>
      {/*Header*/}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold> 
        DELIVERY ADDRESS
        </Text>
        </Center>
        {/*INPUTS*/}
        <Box h='full' bg={Colors.white} px={5}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack space={6} mt={5}>
              {ShippingInputs.map((i,index)=>(
                 <FormControl key={index}>
                <FormControl.Label 
                _text={{
                  fontSize: "12px",
                  fontWeight:"bold",
                }}
                >
                  {i.label}
                ENTER CITY</FormControl.Label>
                <Input borderWidth={.2} 
                borderColor={Colors.blue200}
                bg={Colors.blue300}
                py={4}
                type={i.type}
                color={Colors.blue200}
                _focus={{
                  bg:Colors.blue200,
                  borderWidth: 1,
                  borderColor:Colors.blue200
                }}
                />
              </FormControl>
              ))}

              <Buttone onPress={() => navigation.navigate('Checkout')} bg={Colors.blue200} color={Colors.white}>
            CONTINUE</Buttone>
             
            </VStack>
          </ScrollView>
        </Box>
    </Box>
  )
}

export default ShippingScreen;