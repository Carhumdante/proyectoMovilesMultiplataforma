
import React, { useState } from 'react'
import { Box, Button, CheckIcon, FormControl, Heading,Select,Text, TextArea, VStack } from 'native-base';
import { Colors } from 'react-native-paper';
import Rating from './Rating';
import Message from './Notifications/Message';
import Buttone from './Buttone'
export default function Review() {
    const [ratings, setRatings] = useState('')
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/*IF THERE IS NO REVIEW*/}
      <Message 
        color={Colors.gray} 
        bg={Colors.blue200} 
        bold
        children={"No review"
        }
        /> 

      {/*REVIEW*/}
      <Box p={3} bg={Colors.gray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
            User Doe
        </Heading>
        <Rating value={4}/>
        <Text my={2} fontSize={11}>
        Jan 12 2022</Text>
        <Message 
        color={Colors.black} 
        bg={Colors.white} 
        size={12} 
        children={"Para mí como compradora es MUY importante que hayan fotos,sin fotos reales que me enseñen cuanto mide el producto,que se vea bien de que material está hecho,etc no compro."
        }
        /> 
      </Box>
      {/*WRITE REVIEW*/}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
            WRITE REVIEW PRODUCT
        </Heading>
        <VStack space={6}>
            <FormControl>
                <FormControl.Label 
                _text={{
                    fontSize: "12px",
                    fontWeight: "bold",

                }}>
                    Rating
                </FormControl.Label>
                <Select bg={Colors.blue200} 
                borderWidth={0} 
                rounded={5}
                py={3}
                placeholder="Choose rate"
                _selectedItem={{
                    bg:Colors.blue200,
                    endIcon:<CheckIcon size={3}/>,
                }}
                selectedValue={ratings}
                onValueChange={(e) => setRatings(e)}
                >
                    <Select.Item label="1 - poor" value="1"/>
                    <Select.Item label="2 - Fair" value="2"/>
                    <Select.Item label="3 - Good" value="3"/>
                   

                </Select>
            </FormControl>
            <FormControl>
            <FormControl.Label 
                _text={{
                    fontSize: "12px",
                    fontWeight: "bold",

                }}>
                    Comment
                </FormControl.Label>
                <TextArea 
                h={24} 
                w="full" 
                placeholder="This product is good..."
                borderWidth={0} 
                bg={Colors.blue200}
                py={4}
                _focus={{
                    bg:Colors.blue200,
                }}
                />
            </FormControl>
            <Buttone bg={Colors.blue200} color={Colors.white}>
                SUBMIT
            </Buttone>
            {/* IF USER NOT LOGIN*/}
            <Message 
        color={Colors.white} 
        bg={Colors.black} 
        size={12} 
        children={"Please 'Login' to write a review"}
        /> 
        </VStack>
      </Box>
    </Box>
  );
}