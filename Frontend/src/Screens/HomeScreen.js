import React from 'react'
import { Text, View, Box} from 'native-base'
import { Colors } from 'react-native-paper';
import HomeSearch from  "../Components/HomeSearch";
import HomeProducts from  "../Components/HomeProducts";

function HomeSreen() {
  return (
    <Box flex={1} bg={Colors.white}>
    <HomeSearch/>
    <HomeProducts/>
    </Box>
  );
}

export default HomeSreen