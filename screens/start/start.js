import React from 'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import Button from '../../source/Components/Button';

const Start = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/apadrinapp_logo.png')}
          style={styles.logo}/>
      <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textButton} >Next</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('MenuApadrinapp')}>
          <Text style={styles.textButton} >Next</Text>
      </TouchableHighlight>
      <Button onPress={() => navigation.navigate('PublicacionesRappi')}>esesesesesese</Button>
      </View>
    );
  }

export default Start