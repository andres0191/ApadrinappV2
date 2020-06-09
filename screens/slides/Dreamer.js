import React from 'react'
import { Text, View, TouchableHighlight, Image, ImageBackground } from 'react-native' 
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton'


const Dreamer = ({ navigation }) => {
    return (
     <View style={styles.container}>
       <View style={styles.header} />
       <View style={styles.body}>
       <Image source={require('../../assets/Slides/dreamer.svg')} style={styles.IconImage} />
       </View>
      <View style={styles.footer}>
        <ImageBackground source={require('../../assets/Slides/FondoBorde.svg')} style={styles.logo}>
          <Text style={styles.parragraph}>La mayoría de las personas tienen grandes sueños y algunas saben que con esfuerzo y trabajo duro podrán alcanzarlos, pero.a veces en ese camino, necesitamos de un empujoncito</Text>
          <WhiteButton title='Siguiente' onPress={() => navigation.navigate('Padrino')}></WhiteButton>
        </ImageBackground>
      </View>
     </View>
   );
 }

 export default Dreamer