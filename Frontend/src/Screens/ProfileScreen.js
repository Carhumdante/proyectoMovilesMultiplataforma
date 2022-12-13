import React from 'react'
import { Center, Heading, Image, Text,View } from 'native-base'
import { Colors } from 'react-native-paper';
import Tabs from "../Components/Profile/Tabs";



function ProfileScreen() {
  return (
    <>
        <Center bg={Colors.blue200} pt={10} pb={6}>
          <Image 
          source={{
            uri:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
          />
          <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
            Admin Doe
          </Heading>
          <Text italic fontSize={10} color={Colors.white}>
            JoinedDec 12 2022
          </Text>
        </Center>
        {/*TABS*/}
        <Tabs/>
    </>
  );
}

export default ProfileScreen;
