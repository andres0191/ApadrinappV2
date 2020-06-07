import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Color from '../utils/Colors';

const HollowInput = (props) => {
    const { title = 'MONTO', style = {}, textStyle = {}, onPress } = props

    return (
        <Text style={styles.YellowFont}
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
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderColor: Color.purple,
        borderWidth: 2
    },
    textButton: {
        font: 30,
        color: Color.purple
    }
})

export default HollowInput