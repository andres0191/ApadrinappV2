import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Color from '../utils/Colors';

const HollowInput = (props) => {
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
        paddingVertical: 2,
        paddingHorizontal: 25,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: Color.purple
    },
    textButton: {
        font: 5,
        color: Color.white
    }
})

export default HollowInput