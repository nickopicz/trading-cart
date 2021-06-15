import * as React from 'react';
import { View, Button, StyleSheet, Text, ScrollView } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => {
    return(
        <ScrollView>
        <Card>
            <View style={styles.container}>
            <Card.Title style={styles.title}>Listing1</Card.Title>
            <Text style={styles.text}>This is a Test Listing1 and will recieve data from firebase.firestore</Text>
            <Card.Image source={require('../../assets/nug_homepage.jpg')} style={styles.card}>
            </Card.Image>
            </View>
        </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card:{
        resizeMode: 'contain',
        height: 400,
        width: 250,
        top: '0%'
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
        flex: 0,
      },
    title: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        top: '0%',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        top: '50%',
        left: '0%',
        flexWrap: 'wrap',
        minWidth: '20%',
        maxWidth: '60%'
    }
    });
export default MenuScreen;