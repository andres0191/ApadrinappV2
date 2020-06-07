
import React from 'react'
import { Text, View, TouchableHighlight, Image, ImageBackground } from 'react-native' 
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton'


const Dreamer = ({ navigation }) => {
    return (
     <View style={styles.container}>
       <View style={styles.body}>
       <ImageBackground source={require('../../assets/slides/dreamer.svg')} style={styles.logo} />
       </View> 
      <View style={styles.footer}> 
      <ImageBackground style={styles.ImageBack} source={require('../../assets/slides/fondo_borde.svg')} style={styles.logo}>
      <Text style={styles.parragraph}>La mayoría de las personas tienen grandes sueños y algunas saben que con esfuerzo y trabajo duro podrán alcanzarlos, pero.a veces en ese camino, necesitamos de un empujoncito</Text>
      <WhiteButton syle={styles.bttn} title='Next' onPress={() => navigation.navigate('padrino')}></WhiteButton>
      </ImageBackground>

      </View>
     </View>
   );
 }

 export default Dreamer