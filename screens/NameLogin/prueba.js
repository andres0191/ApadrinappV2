import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

export default function Prueba() {

    const [name, setName] = useState();

    const save = async() => {
        try {
            await AsyncStorage.setItem('MyName', name);
        } catch (err) {
            alert(err);
        }
    }

    return (
        <View style={styles.container}>
            <Text>
                pen up App.js to start working on your app!
            </Text>
            <Text style={{height: 30}}>
                    
            </Text>
            <Text style={styles.name}>
                What-s your name?
            </Text>

            <TextInput style={styles.input} />

            <TouchableOpacity style={styles.button}>
                <Text style={{ color: "white" }}>Save my name!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={{ color: 'white' }}>Remove my name!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: '300'
    },
    input: {
        borderWidth: 1,
        borderColor: '#575DD9',
        alignSelf: 'stretch',
        margin: 32,
        height: 64,
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 24,
        fontWeight: '300',
    },
    button: {
        backgroundColor: '#575DD9',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 32,
        marginHorizontal: 32,
        borderRadius: 6,

    }
});