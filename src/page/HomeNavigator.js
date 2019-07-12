import React from 'react';
import {createStackNavigator} from "react-navigation";
import ShopDetilScreen from './home/ShopDetilScreen'
import HomeScreen from './home/HomeScreen'
const HomeNavigator = createStackNavigator({
    Shop: HomeScreen,
    Detils: ShopDetilScreen,
});
export default HomeNavigator;