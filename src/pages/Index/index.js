import React from 'react';
import * as reactNative from 'react-native';
import { useFonts } from 'expo-font';


export default function Index() {
    const [loaded] = useFonts({
        Poppins: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Roboto: require('../../../assets/fonts/Roboto-Regular.ttf')
    });

    if(!loaded) {
        return null;
    }

    return (
        <reactNative.View style={{backgroundColor: 'white'}}>
            <reactNative.Text style={styles.title} adjustsFontSizeToFit={true} numberOfLines={1}>
                Vitor<reactNative.Text style={styles.blue}>App</reactNative.Text>
            </reactNative.Text>
            <reactNative.View style={styles.inputWrapper}>
                <reactNative.Text style={styles.label}>
                    Email
                </reactNative.Text>
                <reactNative.TextInput
                    style={styles.input}
                />
            </reactNative.View>
        </reactNative.View>
    );
}

const styles = reactNative.StyleSheet.create({
    title: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        fontFamily: 'Poppins',
        textAlign: 'center',
    },
    blue: {
        color: '#0085FF'
    },
    label: {
        fontSize: 12,
        fontFamily: 'Roboto',
        textAlign: 'left'
    },
    inputWrapper: {
        marginLeft: -500,
        marginTop: 20,
        alignSelf: 'center'
    },
    input: {
        height: 65,
        backgroundColor: '#F5F4F7',
        marginTop: 5,
        borderRadius: 6
    }
})