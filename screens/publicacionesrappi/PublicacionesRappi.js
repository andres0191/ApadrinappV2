import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
/* import WhiteButton from '../../source/Components/WhiteButton';
import YellowButton from '../../source/Components/YellowButton';
import firebaseService from '../../services/firebase'; */
import PrevScreenButton from '../../source/Components/PrevScreenButton';
import List from './List.js'
import NameLogin from '../NameLogin/NameLogin'

const PublicacionesRappi = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <PrevScreenButton onPress={() => navigation.navigate('MenuApadrinapp')}></PrevScreenButton>
          <Text style={styles.PageTitle}>Dreamers Rappis</Text>
          <NameLogin></NameLogin>
        </View>
        <View style={styles.ElevatePic}>
          <Image source={require('../../assets/Cabeceras/listaDreamers.png')} style={styles.logo}></Image>
        </View>
      </View>
      <View style={styles.body}>
            <View style={styles.info}>
            <List navigation={props.navigation}/>
              <View style={styles.InputInfo}>
                <Text style={styles.YellowFont}>Juntos lograremos la meta!!</Text>
              </View>
              <View style={styles.InputInfo}>
                {/* <Text style={styles.YellowFont}>Apadrinarás a:</Text> */}
              </View>
            </View>
        </View>
        </ScrollView>
        <View style={styles.footer}>
          {/* <View style={[styles.flex, styles.footerLeft]}>
            <WhiteButton title='Menu' onPress={() => navigation.navigate('MenuApadrinapp')}></WhiteButton>
          </View>
          <View style={[styles.flex, styles.footerRight]}>
            <YellowButton title='Apadrinar' onPress={() => navigation.navigate('Transferencia')}></YellowButton>
          </View> */}
      </View>
    </View>
    )
  }

export default PublicacionesRappi