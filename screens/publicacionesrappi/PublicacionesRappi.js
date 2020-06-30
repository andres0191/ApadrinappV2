import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import PrevScreenButton from '../../source/Components/PrevScreenButton';
import List from './List.js';
import NameLogin from '../NameLogin/NameLogin';


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
            <List />
              <View style={styles.InputInfo}>
                <Text style={styles.YellowFont}>Juntos lograremos la meta!!</Text>
              </View>
              <View style={styles.InputInfo}>
              </View>
            </View>
        </View>
        </ScrollView>
        <View style={styles.footer}>
      </View>
    </View>
    )
  }

export default PublicacionesRappi