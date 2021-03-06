import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Color from '../utils/Colors';

const PurpleButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props

    return (
        <TouchableOpacity onPress={onPress} style = {[styles.button, style]}>
            <Text style={[styles.textButton, textStyle]}> {title} </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        width: 110,
        height: 25,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: Color.purple
    },
    textButton: {
        fontSize: 15,
        textAlign: "center",
        color: Color.white,
        /*fontFamily: 'Montserrat'*/
    }
})

export default PurpleButton