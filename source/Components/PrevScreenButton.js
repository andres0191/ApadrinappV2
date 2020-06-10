import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import Color from '../utils/Colors';

const PrevScreenButton = (props) => {
    let { title = 'Enter', style = {}, textStyle = {}, onPress } = props

    return (
        <TouchableOpacity onPress={(onPress)}>
            <Image source={require('../../assets/atras-giro-logo.png')} style={styles.BackButton}></Image>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    BackButton: {
        height: 30,
        width: 50,
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 320,
        marginTop: 40
    }
})

export default PrevScreenButton