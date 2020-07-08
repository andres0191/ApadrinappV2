import React, { Component } from 'react';
import { View, Text, YellowBox, ActivityIndicator } from 'react-native';
import 'firebase/firebase-firestore';
import styles from './styles';
import YellowButton from '../../source/Components/YellowButton';
import _ from 'lodash';
import {CARGAR_LISTA} from '../../redux/const';
import { connect } from "react-redux";
import {ObtenerLista} from './redux/selector';

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
                    <Text style={styles.Dreamer}></Text>
                    <Text style={styles.ItemName}>{item.name}</Text>
                    <Text style={styles.ItemMonto}>Cantidad solicitada: $ {item.monto}</Text>
                    <Text style={styles.ItemDescription}>{item.description}</Text>
                    <Text></Text>
                    <YellowButton title='Apadrinar' onPress={() => { navigation.navigate('Transferencia', {item: item})}}></YellowButton>
                    </View>
                )): <ActivityIndicator />}
            </View>
        </View>)     
    }
}
const mapStateToProps=state => {
    return{
        listaState:ObtenerLista(state )
    }
}
const mapDispachToProps=dispatch => {
    return{
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

