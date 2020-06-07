import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Color from '../utils/Colors';

const HollowInput = (props) => {
    const { title = '$0', style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style = {[styles.button, style]}>
            <Text style={[styles.textButton, textStyle]}> {title} </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        width: 200,
        paddingVertical: 3,
        paddingHorizontal: 20,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderColor: Color.purple,
        borderWidth: 2,
        marginTop: 65,

    },
    textButton: {
        fontSize: 34,
        fontWeight: "bold",
        color: Color.white
    }
})

export default HollowInput