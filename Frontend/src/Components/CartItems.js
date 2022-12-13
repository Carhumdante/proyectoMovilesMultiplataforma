
import { Box, Button, Center, HStack, Image, Pressable,Text, VStack } from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view';
import products from '../data/Products';
import { Colors } from 'react-native-paper';
import {FontAwesome} from "@expo/vector-icons";

const Swiper = () => (
    <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products}
    renderItem={renderitem}
    renderHiddenItem={hiddenItem}
    showsVerticalScrollIndicator={false}
    />
);
// cart item

const renderitem = (data) =>(
    <Pressable>
        <Box ml={6} mb={3}>
        <HStack 
        alignItems="center" 
        bg={Colors.white} 
        shwadow={1} 
        rounded={10}
        overflow="hidden"
        >
        <Center w="25%" bg={Colors.blue200}>
        <Image source={{uri: "http://192.168.43.219/lygi.web/resources/images/products/" + data.item.image_name + ".jpg"}} 
        alt={data.item.image_name} 
        w="full" 
        h={24}
        resizeMode="contain"
        />
        </Center>
        <VStack w='60%'px={2} space={2}>
            <Text isTruncated color={Colors.black} bold fontSize={10}>
                {data.item.productCode}
            </Text>
            <Text bold color={Colors.lightBlack}>
                ${data.item.priceEach}
                </Text>

        </VStack>
        <Center>
            <Button bg={Colors.blue100} _pressed={{bg: Colors.blue200}} _text={{
                color:Colors.white
            }}>
            {data.item.quantityOrdered}
            </Button>
        </Center>
        </HStack>
        </Box>
    </Pressable>
);

//hiden

const hiddenItem = () => {
    <Pressable 
    w={50}
    roundedTopRight={10} 
    roundedBottomRight={10} 
    h='88%' 
    ml="auto"
    justifyContent="center "
    bg={Colors.red}
    >
        <Center alignItems="center" sapce={2}>
        <FontAwesome name="trash" size={24} color={Colors.white} />
        </Center>
    </Pressable>
};

const CartItems = () => {
    console.log(products)
  return (
    <Box mr={6}>
      <Swiper/>
    </Box>
  );
};

export default CartItems
