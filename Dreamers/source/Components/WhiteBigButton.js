import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Color from '../utils/Colors';

const WhiteBigButton = (props) => {
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
        minWidth: 135,
        height: 30,
        textAlign: 'center',
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: Color.white,
        marginTop: 50,
    },
    textButton: {
        fontSize: 20,
        color: Color.purple
    }
})

export default WhiteBigButton