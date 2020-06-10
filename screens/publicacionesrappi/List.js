import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Alert} from 'react-native';
import Color from  '../../source/utils/Colors';
import WhiteButton from '../../source/Components/WhiteButton';
import ViewDreamer from './ViewDreamer'


const win = Dimensions.get('window');

class Lista extends Component {
    state = {
       names: [
          {'name': 'Ben', 'id': 1, 'meta':'Moto'},
          {'name': 'Susan', 'id': 2, 'meta':'Moto'},
          {'name': 'Robert', 'id': 3, 'meta':'Moto'},
          {'name': 'Mary', 'id': 4, 'meta':'Bicicleta'},
          {'name': 'Daniel', 'id': 5, 'meta':'Repararción'},
          {'name': 'Laura', 'id': 6, 'meta':'Moto'},
          {'name': 'John', 'id': 7, 'meta':'Bicicleta'},
          {'name': 'Debra', 'id': 8, 'meta':'Moto'},
          {'name': 'Aron', 'id': 9, 'meta':'Moto'},
          {'name': 'Ann', 'id': 10, 'meta':'Moto'},
          {'name': 'Steve', 'id': 11, 'meta':'Moto'},
       ]
    }
    createThreeButtonAlert = (item) =>
    Alert.alert(
      "Vas a apadrinar a:",
      item.name,
      [
        {
          text: "Apadrinar",
          onPress: () => console.log("Estado de cuenta")
        },
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Saldo", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    render() {
       return (
          <View>
             <ScrollView>
                {
                   this.state.names.map((item, index) => (
                    <TouchableOpacity
                       key = {item.id}
                       style = {styles.item}
                       onPress = {() => this.createThreeButtonAlert(item)}>
                           <Text style={styles.title}>Dreamer</Text>
                        <Text style = {styles.text}>
                          {item.name}
                       </Text>
                       <Text style={styles.titleW}>Meta</Text>
                       <Text style = {styles.textY}>
                          {item.meta}
                       </Text>
                       <Text style={styles.monto}>$5'000.000</Text>
                    </TouchableOpacity>
                   ))
                }
             </ScrollView>
          </View>
       )
    }
 }
 export default Lista
 
 const styles = StyleSheet.create ({
    item: {
       flex : 1,
       flexDirection: 'column',
       justifyContent: 'space-between',
       alignItems: 'flex-start',
       width: win.width,
       padding: 15,
       margin: 3,
       backgroundColor: Color.purple,
    },
    text : {
        color : Color.white,
        fontSize : 24
    },
    title : {
        color : Color.yellow,
        fontSize : 20
    }, 
    titleW : {
        color : Color.white,
        fontSize : 20
    }, 
    textY : {
        color : Color.yellow,
        fontSize : 24
    },
    monto :{
        fontSize: 30,
        color: 'white',
        marginTop: -55,
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 200,
    },
    alertStyle: {
       backgroundColor: 'red',
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'flex-end'

    }
 })