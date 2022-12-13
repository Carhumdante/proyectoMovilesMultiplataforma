import React, { useState } from 'react'
import { Text, View, Box, ScrollView, Image, Heading, HStack, Spacer } from 'native-base'
import { Colors } from 'react-native-paper';
import Rating from '../Components/Rating';
import Buttone from '../Components/Buttone';
import Review from '../Components/Review';
import NumericInput from "react-native-numeric-input";
import { useNavigation } from '@react-navigation/native';

function SingleProductScreen({ route }) {
  const [values, setvalue] = useState(0)
  const navigation = useNavigation()
  const product = route.params
  product['value'] = Math.floor(Math.random() * 10)
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: "http://192.168.43.219/lygi.web/resources/images/products/" + product.image_name + ".jpg" }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>

          {product.productName}

        </Heading>
        <Rating value={5} text={`${150} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {product.quantityInStock > 0 ? (
            <>
              <NumericInput
                value={values}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                maxValue={product.quantityInStock}
                minValue={0}
                borderColor={Colors.blue200}
                rounded
                textColor={Colors.black}
                iconStyle={{ Colors: Colors.white }}
                rightButtonBackgroundColor={Colors.blue200}
                leftButtonBackgroundColor={Colors.blue200}
              />
            </>
          ) : (

            <Heading bold color={Colors.red} italic fontSize={12}>
              Out of stock
            </Heading>

          )}

          <Spacer />
          <Heading bold color={Colors.black} italic fontSize={19}>
            ${product.buyPrice}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <Buttone onPress={() => navigation.navigate("Cart", product)} bg={Colors.blue200} color={Colors.white} mt={10}>
          ADD TO CART
        </Buttone>
        {/*REVIEW*/}
        <Review />

      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
