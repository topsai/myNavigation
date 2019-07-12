import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './src/page/SettingsScreen';
import ShopcarScreen from './src/page/ShopcarScreen';
import HomeNavigator from './src/page/HomeNavigator';




const TabNavigator = createBottomTabNavigator(
    {
        首页: HomeNavigator,
        购物车: ShopcarScreen,
        //Settings: SettingsScreen,
        个人中心: SettingsScreen,

    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Icon;
                let iconName;
                if (routeName === '首页') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    // IconComponent = HomeIconWithBadge;
                } else if (routeName === '个人中心') {
                    iconName = `ios-options`;
                } else if (routeName === '购物车') {
                    iconName = `ios-cart`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor}/>;
            },
        }),
    }
);

// export default createAppContainer(AppNavigator);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}