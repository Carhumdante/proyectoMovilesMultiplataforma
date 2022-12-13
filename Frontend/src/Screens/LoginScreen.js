import React from 'react'
import { Box,Text,View, Image, Heading, VStack, Input, Button, Pressable } from 'native-base'
import { Colors } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

function LoginScreen({navigation}) {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image flex={1} alt="Logo" 
      resizeMode="cover"
      size="lg"
      w="full"
      source={require("../../assets/images/cover.png")}
     /> 
     <Box w="full" 
     h="full" 
     position="absolute" 
     top="0" px="6" 
     justifyContent="center"
     >
      <Heading>LOGIN</Heading>
      <VStack space={5} pt="6">
        {/*EMAIl*/}
      <Input 
      InputLeftElement={
        <MaterialIcons name="email" size={24} color="black" />
      }
      variant="underlined" placeholder="user@gmail.com" w="70%"
      pl={2}
      color={Colors.main} borderBottomColor={Colors.underLine}
      />
      {/*PASSWORD*/}
      <Input 
      InputLeftElement={
        <AntDesign name="eye" size={24} color="black" />
      }
      variant="underlined" 
      placeholder="******"
      type="password"
      w="70%"
      pl={2}
      color={Colors.main} borderBottomColor={Colors.underLine}
      />
      </VStack>
      <Button 
      _pressed={{
        bg:Colors.blue200,
      }}
      my={30} 
      w="40%" 
      rounded={50} 
      bg={Colors.blue500}
      onPress={() => navigation.navigate('Bottom')}
      >
      LOGIN
      </Button>
      <Pressable mt={4} onPress={() => navigation.navigate('Register')}>
        <Text>SIGN UP</Text>
      </Pressable>

     
     </Box>
    </Box>
  )
}

export default LoginScreen;
