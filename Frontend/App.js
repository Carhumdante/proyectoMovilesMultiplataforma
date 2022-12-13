import React from "react";
import { NativeBaseProvider, Box, Text, StatusBar } from "native-base";
import ProfileScreen from "./src/Screens/ProfileScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import PlaceOrderScreen from "./src/Screens/PlaceOrderScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./src/Navigations/BottomNav";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true}/>
        <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{
        headerShown: false,
        }}
        >
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="order" component={OrderScreen}/>
          <Stack.Screen name="Bottom" component={BottomNav}/>

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}