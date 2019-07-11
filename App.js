import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import CardSection from './src/components/CardSection'
import Card from "./src/components/Card";
import Checkbox from "./src/components/Checkbox";
import MenuIconInfo from "./src/components/MenuIconInfo";
import IcoMoonIcon from './src/assets/icomoon';
import SettingsScreen from './src/page/SettingsScreen';

// name就是svg生成字体图标时的文件名, 在selection.json里有定义


class ShopScreen extends React.Component {
    render() {
        return (
            <View style={
                {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#64ffcc',
                }
            }>
                <Text>ShopScreen!</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>待付款</Text>
                    <Text>待发货</Text>
                    <Text>待收货</Text>
                    <Text>评价</Text>
                    <Text>退款/售后</Text>
                </View>
                <Button title='ShopDetils' onPress={() => this.props.navigation.navigate('Detils')}/>
            </View>
        );
    }
}

ShopScreen.navigationOptions = ({navigation}) => {
    //  关键这一行设置 header:null
    return {
        header: null,
    }
};


class ShopDetilScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>ShopDetilScreen!</Text>
                <Button title='Home' onPress={() => this.props.navigation.navigate('Shop')}/>

            </View>
        );
    }
}

const HomeNavigator = createStackNavigator({
    Shop: ShopScreen,
    Detils: ShopDetilScreen,
});
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import Icon from 'react-native-vector-icons/Ionicons';

class ShopcarScreen extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: '#efefef'}}>
                <CardSection style={{padding: 10, backgroundColor: '#efb200', paddingBottom: 40}}>
                    <Card style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0
                    }}>
                        <Text style={{fontSize: 20}}>购物车</Text>
                        <Text>管理</Text>
                    </Card>
                    <Text>
                        <IcoMoonIcon
                            name='uniE900'
                            size={25}
                            color='#fff'
                        />
                        <AntDesign name={'stepforward'}/>
                        <FontAwesome
                            name={'wpforms'}
                            size={30}
                            color='#fff'
                        />
                        <Icon name='md-home' size={30} color='blue'/>
                    </Text>
                </CardSection>


                <CardSection style={{
                    marginTop: -28,
                    margin: 18,
                    padding: 18,
                    flexDirection: 'column',
                    backgroundColor: '#FFF',
                    borderRadius: 10,
                    overflow: 'hidden'
                }}>

                    <Card style={{
                        flexDirection: 'row',
                        borderWidth: 0,
                        alignItems: 'center',
                    }}>
                        <Checkbox style={{}}/>
                        <Text style={{fontSize: 18}}>永兴实木家具 > </Text>
                        <Text></Text>
                    </Card>

                    <Card style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0,
                        alignItems: 'center',
                    }}>
                        <Checkbox style={{}}/>
                        <View style={{
                            flexDirection: 'row',
                            flex: 1
                        }}>
                            <Image style={{
                                height: 80,
                                width: 80,
                                borderRadius: 8,
                                overflow: 'hidden'
                            }}
                                   source={{uri: 'https://my-firstrn-text.oss-cn-beijing.aliyuncs.com/images/img.jpg'}}>
                            </Image>
                            <View style={{flex: 1}}>
                                <View style={{
                                    paddingLeft: 8
                                }}>
                                    <Text numberOfLines={2}
                                          style={{lineHeight: 20}}>厂家直销实木吧椅厂家直销实木吧椅厂家直销实木吧椅厂家直销实木吧椅厂家直销实木吧椅厂家直销实木吧椅</Text>
                                </View>

                                <View style={{
                                    margin: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={{color: 'red'}}>￥20.00</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start'
                                    }}>
                                        <Text style={{
                                            borderWidth: 0.3,
                                            borderBottomLeftRadius: 3,
                                            borderTopLeftRadius: 3,
                                            // borderRadius: 3,
                                            // paddingLeft: 5,
                                            // paddingRight: 5,
                                            width: 25,
                                            textAlign: 'center',
                                            margin: 0,
                                            borderRightWidth: 0
                                        }}>-</Text>
                                        <Text style={{
                                            borderWidth: 0.3,
                                            // borderRadius: 3,
                                            paddingLeft: 5,
                                            paddingRight: 5,
                                            margin: 0,
                                            width: 25,
                                            textAlign: 'center'
                                        }}>1</Text>
                                        <Text style={{
                                            borderWidth: 0.3,
                                            borderBottomRightRadius: 3,
                                            borderTopRightRadius: 3,
                                            // paddingLeft: 5,
                                            // paddingRight: 5,
                                            width: 25,
                                            textAlign: 'center',
                                            borderLeftWidth: 0
                                        }}>+</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </Card>
                </CardSection>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    detil: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    imageStyle: {
        height: 200,
        flex: 1,
        borderRadius: 3,
        overflow: 'hidden'
    },
    iconStyle: {
        alignItems: 'center',
        padding: 8,
    }
});

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