import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

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
        height: 30,
        width: 30,
        marginTop: 10,
    }
})

export default PrevScreenButton