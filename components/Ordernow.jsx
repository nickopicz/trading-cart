import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function OrderNow () {

    const navigation = useNavigation();

    return (
        <View style={ {width:"40%"} }>
        <Button
        title="Order now"
        onPress = {() => navigation.navigate('Menu')}
        color="#ff9999"
        accessibilityLabel='Learn More'
        style={orderNowStyle.orderButton}
        />
        </View>
    );
}

const orderNowStyle = StyleSheet.create({
    orderButton: {
    flexDirection: "row",
    color: "#004953",
    height: 100,
    padding: 20,
    }
});

