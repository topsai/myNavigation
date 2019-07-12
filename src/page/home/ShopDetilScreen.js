import React from 'react';
import {Button, Text, View} from "react-native";

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


export default ShopDetilScreen;