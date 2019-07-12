import React from 'react';
import {Button, Image, Text, View, TextInput, StyleSheet} from "react-native";
import CardSection from "../../components/CardSection";
import Card from "../../components/Card";
import Checkbox from "../../components/Checkbox";
import MenuIconInfo from "../../components/MenuIconInfo";
import Swiper from 'react-native-swiper';
import { Dimensions } from "react-native";

//也可以在这里先取出屏幕的宽高
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').Height;
class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: '#efefef'}}>
                <CardSection style={{padding: 10, backgroundColor: '#efb200', paddingBottom: 40}}>
                    <Card style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0,
                        alignItems: 'center'
                    }}>
                        <MenuIconInfo name={'ios-add'} text={'扫一扫'}/>
                        <TextInput
                            style={{height: 40, borderRadius: 18, backgroundColor: '#FFF', width: 200}}
                            placeholder=""
                            onChangeText={(text) => this.setState({text})}
                        />
                        <MenuIconInfo name={'ios-add'} text={'会员码'}/>
                    </Card>
                </CardSection>

                <CardSection>
                    <Swiper
                        style={styles.wrapper}
                        //height={width * 40 / 75}
                        showsButtons={false}
                        autoplay={true}
                        paginationStyle={styles.paginationStyle}
                        dotStyle={styles.dotStyle}
                        activeDotStyle={styles.activeDotStyle}
                    >
                        <Image source={{uri: 'https://my-firstrn-text.oss-cn-beijing.aliyuncs.com/images/img.jpg'}}
                               style={styles.bannerImg}/>
                    </Swiper>
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
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    bannerImg: {
        height: width * 40 / 75,
        width: width,
    },
    wrapper: {
        width: width,
    },
    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        borderRadius: 0,
    },
});

HomeScreen.navigationOptions = ({navigation}) => {
    //  关键这一行设置 header:null
    return {
        header: null,
    }
};

export default HomeScreen;