import React from 'react'
import { Box,Text,View, Image, Heading, VStack, Input, Button, Pressable } from 'native-base'
import { Colors } from 'react-native-paper';
import { MaterialIcons,FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

function RegisterScreen({navigation}) {
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
    <Heading>SIGN UP</Heading>
    <VStack space={5} pt="6">
      {/*USERNAME*/}
      <Input 
    InputLeftElement={
      <FontAwesome name="user" size={24} color="black" />
    }
    variant="underlined" placeholder="Diego Lopez Ej." w="70%"
    pl={2}
    color={Colors.main} borderBottomColor={Colors.underLine}
    />
      {/*EMAIl*/}
    <Input 
    InputLeftElement={
      <MaterialIcons name="email" size={24} color="black" />
    }
    variant="underlined" 
    placeholder="ejemplo@gmail.com"
    w="70%"
    pl={2}
    type="text"
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
    bg={Colors.blue200}
    onPress={() => navigation.navigate('Bottom')}
    >
    SIGN UP
    </Button>
    <Pressable mt={4} onPress={() => navigation.navigate('Login')}>
      <Text>LOGIN</Text>
    </Pressable>

   
   </Box>
  </Box>
  )
}

export default RegisterScreen;