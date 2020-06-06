import React from 'react';
import {navigation} from '@react-navigation/native';
import { View, Image, Button} from 'react-native';
import styles from './styles';

class Start extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/apadrinapp_logo.png')}
          style={styles.logo}/>
          <Button title='Next' onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }
}

export default Start