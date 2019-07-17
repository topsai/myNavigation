import React from 'react';
import {Button, Dimensions, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import Swiper from "react-native-swiper";
import CardSection from "../../components/CardSection";

const {width} = Dimensions.get('window');

class ShopDetilScreen extends React.Component {
    render() {
        return (
            <View style={{}}>
                <!-- 轮播图 -->
                <View style={styles.container}>
                    <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay>
                        <TouchableOpacity style={styles.slide1}
                                          onPress={() => this.props.navigation.navigate('Detils')}>
                            <ImageBackground style={{
                                height: 200, width, overflow: 'hidden', justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                             source={require('../../images/img/1.jpg')}>
                                <Text style={styles.text}>Beautiful</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slide2}
                                          onPress={() => this.props.navigation.navigate('Detils')}>

                            <ImageBackground style={{
                                height: 200, width, overflow: 'hidden', justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                             source={require('../../images/img/2.jpg')}>
                                <Text style={styles.text}>Beautiful</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slide3}
                                          onPress={() => this.props.navigation.navigate('Detils')}>

                            <ImageBackground style={{
                                height: 200, width, overflow: 'hidden', justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                             source={require('../../images/img/3.jpg')}>
                                <Text style={styles.text}>Beautiful</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </Swiper>
                </View>
                <!-- 价格 -->
                <View style={{backgroundColor: '#efefef'}}>
                    <View style={{backgroundColor: '#FFF', margin: 8}}>
                        <Text>asfasf</Text>
                    </View>
                </View>
            </View>
        );
    }
}

ShopDetilScreen.navigationOptions = ({navigation}) => {
    //  关键这一行设置 header:null
    return {
        headerTransparent: true, // 背景透明
    }
};


const styles = {
    container: {
        //borderWidth: 1,
        height: 200
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    image: {
        width,
        flex: 1
    }
};

export default ShopDetilScreen;