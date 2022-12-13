import { Box, FormControl, Input, ScrollView, VStack } from 'native-base';
import React from 'react'
import { Colors } from 'react-native-paper';
import { Button } from 'react-native-web';
import Buttone from '../Buttone'

const Inputs =[
    {
       label:"USERNAME",
       type:"text",
    },
    {
        label:"EMAIl",
        type:"text",
     },
     {
        label:"NEW PASSWORD",
        type:"password",
     },
     {
        label:"CONFIRM PASSWORD",
        type:"password",
     },
]

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
            {
                Inputs.map((i,index) =>(
                 <FormControl key={index}>
                <FormControl.Label>
                    {i.label}
                </FormControl.Label>
                <Input borderWidth={0.5} bg={Colors.blue200} py={4} 
                type={i.type}
                color={Colors.black}
                fontSize={20}
                />
            </FormControl> 
                ))}
            <Buttone bg={Colors.blue200} color={Colors.white}>
            UPDATE PROFILE
            </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default Profile