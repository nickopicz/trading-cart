import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const NugPic = () => {
    return(
    <View>
        <Image
        style={styles.hdnug}
        source={require("../assets/nug_homepage.jpg")}/>
    </View>
    );
}
const styles = StyleSheet.create({
    hdnug: {
        resizeMode: "center",
        height: 200,
        width: 300
    },
});


export default NugPic;