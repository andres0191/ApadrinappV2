import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import Color from '../utils/Colors';

const PrevScreenButton = (props) => {
    let { title = 'Enter', style = {}, textStyle = {}, onPress } = props

    return (
        <TouchableOpacity onPress={(onPress)}>
            <Image source={require('../../assets/button-atras.svg')} style={styles.BackButton}></Image>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    BackButton: {
        height: 55,
        width: 55
    }
})

export default PrevScreenButton