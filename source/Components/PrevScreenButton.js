import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import Color from '../utils/Colors';

const PrevScreenButton = (props) => {
    let { title = 'Enter', style = {}, textStyle = {}, onPress } = props

    return (
        <TouchableOpacity onPress={(onPress)}>
            <Image source={require('../../assets/Botones/atrasCirculo.png')} style={styles.BackButton}></Image>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    BackButton: {
        height: 50,
        width: 50,
    }
})

export default PrevScreenButton