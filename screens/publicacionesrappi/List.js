import React, { Component, useState, useEffect } from 'react';
import { View, Text, YellowBox, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firebase-firestore';
import styles from './styles';
import YellowButton from '../../source/Components/YellowButton';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import {CARGAR_LISTA} from '../../redux/const';
import { connect } from "react-redux";
import {ObtenerLista} from './selector';

YellowBox.ignoreWarnings(['Setting a timer']);
/* const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
}; */


class List extends Component{
/* Llamar a las funciones una vez cargue la pantalla */
    componentDidMount () {
        const { obtenerListaDispatch }=this.props;
        obtenerListaDispatch();
    }
    render(){
        const {listaState, navigation} = this.props
        return( <View style={styles.container}>
            <View style={styles.AllBoxes}>
                {listaState ? listaState.map(item => (
                     <View key={item.id} style={styles.Boxes}>
                    <Text style={styles.Dreamer}>Dreamer</Text>
                    <Text style={styles.ItemName}>{item.name}</Text>
                    <Text style={styles.ItemMonto}>Cantidad solicitada: $ {item.monto}</Text>
                    <Text style={styles.ItemDescription}>{item.description}</Text>
                    <Text style={styles.ItemDescription}>{item.id}</Text>
                    <Text></Text>
                    <YellowButton title='Apadrinar' onPress={() => { navigation.navigate('Transferencia', {item: item})}}></YellowButton>
                    </View>
                )): <ActivityIndicator />}
            </View>
           {/*  )} */}
        </View>)     
    }
}
/* Unir lo que viene de ObtenerLista con la propiedad List  de este componente*/
const mapStateToProps=state => {
    return{
        /* esta es la funcion del selector */
        listaState:ObtenerLista(state )
    }
}

/* mapDispachToProps es para emparejar las accciones del archivo action a las propiedades de List */
const mapDispachToProps=dispatch => {
    return{
        /* Es un llamado a un action */
        obtenerListaDispatch:() => dispatch (
            {
                type:CARGAR_LISTA, value:1
            }
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispachToProps
  )(List)

