import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Alert} from 'react-native';
import Color from  '../../source/utils/Colors';
import WhiteButton from '../../source/Components/WhiteButton';
/* import ViewDreamer from './ViewDreamer' */


const win = Dimensions.get('window');

class Lista extends Component {
    state = {
       names: [
         {'name': 'Ben', 'id': 1, 'meta':'Moto', 'value': '$1.800.000', 'description': 'Ben quien desea comprar una Motocicleta para mejorar su economia y la de su familia, por ello requiere $1.800.000 para iniciar su trabajo como Rappitendero'},
         {'name': 'Susan', 'id': 2, 'meta':'Moto', 'value': '$3.500.000', 'description': 'Migrar de un pueblo a una ciudad trae grandes retos, por ello Susan pide $3.500.000 para comprar una Motocicleta y trabajar como Rappitendera'},
         {'name': 'Robert', 'id': 3, 'meta':'Moto', 'value': '$1.500.000', 'description': 'Robert, hace poco termino el colegio y desea costearse su universidad para estudiar Ing. en Sistemas, por ello solicita $1.500.000 para alcanzar sus suenos'},
         {'name': 'Mary', 'id': 4, 'meta':'Bicicleta', 'value': '$2.450.000', 'description': 'Mary migro de un pais vecino con lo poco que tenia. Investigo y encontro que con Rappi puede lograr su meta de darle un mejor futuro a su familia, por ello pide $2.400.000 para comprar una bicicleta, un celular y el cajon para empezar a trabajar en Rappi cuanto antes!'},
         {'name': 'Daniel', 'id': 5, 'meta':'Repararción', 'value': '$2.800.000', 'description': 'Daniel vive con sus padres quienes son adultos mayores y propietarios de una tienda de barrio. Con Rappi desea mejorar sus ingresos y ayudarle a sus padres, por ello solicita $2.800.000 para Reparar su Motocicleta y comprar el cajon para trabajar en Rappi'},
         {'name': 'Laura', 'id': 6, 'meta':'Moto', 'value': '$1.000.000', 'description': 'Laura trabajaba como Secretaria en un consultorio, debido a ello, desidio emprender por su cuenta y juntando los ahorros que tenia, solicita $1.000.000 para comprar una motocicleta y ser Rappitendera'},
         {'name': 'John', 'id': 7, 'meta':'Bicicleta', 'value': '$800.000', 'description': 'Jhon desea comprar una casa para brindar un mejor futuro en su hogar. Por ello, solicita $800.000 para comprar una bicicleta y el cajon para trabajar en Rappi y lograr su sueno'},
       ]
    }

    createThreeButtonAlert = (item) =>
    Alert.alert(
      "Vas a apadrinar a:",
      `${item.name}. ${item.description}`,
      [
        {
          text: "Aceptar",
          onPress: () => console.log("Estado de cuenta")
        },
        {
          text: "Cancelar",
          onPress: () => ("Cancel Pressed"),
          style: "Cancel"
        },
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
                       <Text style={styles.monto}>{item.value}</Text>
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