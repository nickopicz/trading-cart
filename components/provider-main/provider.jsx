import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default function Provider() {
    const state = React.useState();
    return(
        <View style={styles.view}>

        <Button
        title="Create a Deck"
        onPress = {() => navigation.navigate('CreateCard')}
        color="#ff9999"
        accessibilityLabel='Learn More'
        style={styles.button}/>

        </View>
    );
}

const styles = create.StyleSheet({
    button: {
        flexDirection: "row",
        color: "#004953",
        height: 100,
        padding: 20,
    },
    view: {
        width: '40%'
    }
})