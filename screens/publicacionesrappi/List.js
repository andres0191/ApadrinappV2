import React, { Component } from 'react'
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Color from  '../../source/utils/Colors'

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
    alertItemName = (item) => {
        alert(item.name)
    }
    render() {
       return (
          <View>
             <ScrollView>
                {
                   this.state.names.map((item, index) => (
                    <TouchableOpacity
                       key = {item.id}
                       style = {styles.item}
                       onPress = {() => this.alertItemName(item)}>
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
       backgroundColor: Color.purple
    },
    text : {
        color : Color.white,
        fontSize : 24
    },
    title : {
        color : Color.yellow,
        fontSize : 15
    }, 
    titleW : {
        color : Color.white,
        fontSize : 15
    }, 
    textY : {
        color : Color.yellow,
        fontSize : 24
    },
    monto :{
        flex : 1,
        flexDirection : 'row',
        alignContent : 'flex-end'
    }
 })