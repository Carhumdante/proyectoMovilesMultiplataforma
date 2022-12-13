
import { Box, Button, HStack, ScrollView, Text } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Pressable } from 'react-native';
import { Colors } from 'react-native-paper'
import axios from 'axios';

const Orders = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {

        //Obtenemos todas las ordenes

        const orderData = new FormData()
        orderData.append("customerNumber", 114)
        axios.post('http://192.168.43.219/lygi.web/public/api/order_customer',
            orderData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log(response.data)
                setOrder(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    },[1])
    return (
        <Box h='full' bg={Colors.white} pt={5}>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/*PAID ORDER*/}
                {Array.isArray(order) ? order.map((ord) => {
                    return (
                        <Pressable>
                            <HStack space={4}
                                justifyContent="space-between"
                                alignItems="center"
                                py={5}
                                px={2}
                            >
                                <Text fontSize={9} color={Colors.black} isTruncated>
                                    {ord.orderNumber}
                                </Text>
                                <Text fontSize={12} color={Colors.black} isTruncated>
                                    PAID
                                </Text>
                                <Text fontSize={11} italic color={Colors.black} isTruncated>
                                    {ord.orderDate}
                                </Text>
                                <Button
                                    px={8}
                                    py={1.5}
                                    rounded={50}
                                    bg={Colors.green600}
                                    _text={{
                                        color: Colors.white
                                    }}
                                    _pressed={{
                                        bg: Colors.blue200
                                    }}
                                >
                                {'$ '+String(ord.total)}
                                </Button>

                            </HStack>
                        </Pressable>
                    )
                }) : null}

                {/*PAID ORDER*/}

            </ScrollView>
        </Box>
    );
}

export default Orders
