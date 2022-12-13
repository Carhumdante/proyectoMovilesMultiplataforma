import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Entypo, AntDesign, FontAwesome,FontAwesome5,MaterialCommunityIcons} from "@expo/vector-icons";
import HomeScreen from '../Screens/HomeScreen';
import { Center } from 'native-base';
import { Colors } from 'react-native-paper';
import ProfileScreen from '../Screens/ProfileScreen';
import CartScreen from '../Screens/CartScreen';
import StackNav from './StackNav';

const Tab = createBottomTabNavigator()
const CustomTab = ({children,onPress}) =>  <Text>hh</Text>;

const BottomNav = () => {

  return (
    <Tab.Navigator 
    backBehavior="Main" 
    initialRouteName="Main"
    screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle: { ...styles.tab },
        headerShown:false,
        tabBarHideOnKeyboard:true
    }}
    >
        <Tab.Screen
        name="Main" 
        component={StackNav} 
        options={{
            tabBarIcon:({focused})=>(
                <Center>
                    {focused ? (
                        <Entypo name="home" size={24} color={Colors.blue200}/>
                    ) : (

                        <AntDesign name="home" size={24} color={Colors.blue300}/>
                    )}
                </Center>
            )
        }} 
        />
        {/*Cart*/}
        <Tab.Screen
        name="Cart" 
        component={CartScreen} 
        options={{
            
            tabBarIcon:({focused})=>(
                <Center>
                    {focused ? (
                        <FontAwesome5 name="shopping-basket" size={24} color={Colors.blue200}/>
                    ) : (

                        <MaterialCommunityIcons name="shopping-outline" size={24} color={Colors.blue300}/>
                    )}
                </Center>
            )
        }} 
        />
        {/*profile*/}
        <Tab.Screen
        name="profile" 
        component={ProfileScreen} 
        options={{
            tabBarIcon:({focused})=>(
                <Center>
                    {focused ? (
                        <FontAwesome name="user" size={24} color={Colors.blue200}/>
                    ) : (

                        <AntDesign name="user" size={24} color={Colors.blue300}/>
                    )}
                </Center>
            )
        }} 
        />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: Colors.white,
        height: 60,
        // paddingTop: 5,
    },
});

export default BottomNav;