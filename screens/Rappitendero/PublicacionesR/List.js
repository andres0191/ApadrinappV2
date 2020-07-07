import React, { Component } from 'react';
import { View, Text, YellowBox, ActivityIndicator } from 'react-native';
import 'firebase/firebase-firestore';
import styles from './styles';
import _ from 'lodash';
import {CARGAR_LISTA_RAPPI} from '../../../redux/const';
import { connect } from "react-redux";
import {ObtenerListaRappi} from './redux/selectorrappi';

YellowBox.ignoreWarnings(['Setting a timer']);

class List extends Component{
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
                    </View>
                )): <ActivityIndicator />}
            </View>
           {/*  )} */}
        </View>)     
    }
}
const mapStateToProps=state => {
    return{ listaState:ObtenerListaRappi(state ) }
}

const mapDispachToProps=dispatch => {
    return{  obtenerListaDispatch:() => dispatch (
            {
                type:CARGAR_LISTA_RAPPI, value:1
            })}
}
export default connect(
    mapStateToProps,
    mapDispachToProps
  )(List)