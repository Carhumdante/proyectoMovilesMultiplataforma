import React, { useState, useEffect } from 'react'
import { Text, View, Box, ScrollView, Flex, Pressable,Image, Heading} from 'native-base'
import { Colors } from 'react-native-paper';
import Rating from './Rating';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function HomeProducts() {
    const navigation =useNavigation()
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        //Obtenemos todos los productos
        const orderData = new FormData()
        axios.get('http://192.168.43.219/lygi.web/public/api/product_show',
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
                setProduct(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    },[1])
  return (
   <ScrollView flex={1} showsVerticalScrollIndicator={false} >
    <Flex flexWrap="wrap" 
    direction="row" 
    justifyContent="space-between"
    px={6}
    >
        {
           Product.map((product)=>(
            <Pressable 
            onPress={() => navigation.navigate("Single",product)}
            key={product.productCode} 
            w="47%" 
            bg={Colors.white}
            rounded="md" 
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
            >
                <Image
                 source={{ uri: "http://192.168.43.219/lygi.web/resources/images/products/" + product.image_name + ".jpg"}} 
                alt={product.productName}
                w="full" 
                h={24}
                resizeMode="contain"
                />
            <Box px={4} pt={1}>
                <Heading size="sm" bold>
                    ${product.buyPrice}
                </Heading>
                <Text fontSize={10} mt={1} isTruncated w="full">
                     {product.productName}
                </Text>
                {/*rating*/}
                <Rating value={5}/>
            </Box>
                
            </Pressable>

            ))}
    </Flex>
   </ScrollView>
  )
}

export default HomeProducts;
