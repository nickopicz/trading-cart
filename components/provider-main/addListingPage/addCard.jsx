import React from 'react';
import { Button, View, StyleSheet, TextInput } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

export default function CardCreate() {

    const [titleName, onChangeTitle] = React.useState("Add name of listing");
    const [description, onChangeDesc] = React.useState('create description');


    const onButtonPress = React.useCallback((type, options) => {
        if (type === 'capture') {
          ImagePicker.launchCamera(options, setResponse);
        } else {
          ImagePicker.launchImageLibrary(options, setResponse);
        }
      }, []);
    return(
        <View style={styles.view}>
            <TextInput
            style={styles.Title}
            onChangeText={onChangeTitle}
            value={titleName}
            />
            <TextInput
            style={styles.Description}
            onChangeText={onChangeDesc}
            value={description}
            />
            <View style={styles.buttonContainer}>
          {actions.map(({title, type, options}) => {
            return (
              <DemoButton
                key={title}
                onPress={() => onButtonPress(type, options)}>
                {title}
              </DemoButton>
                );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        justifyContent: 'center'
    },
    Title: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    Description: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    }
})