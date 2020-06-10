import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, Button} from 'react-native'


class ModalExample extends Component {
constructor {
   super();
   this.state={
      show=False;
   }
}
render() {
   return (
      <View style={styles.container}>
         <Text style={styles.textstyles}>Normal Screen</Text>
         <Button title="mostrar modal" onPress={()=>{this.setState({show:true})}} />
         <Modal transparent={true} visible={this.state.show}>
            <View style={styles.modalview}>
               <View style={style.interModal}>
                  <Text style={styles.modelStyle}>Model Text</Text>
                  <Button title="ocultar modal" onPress={()=>{this.setState({show:true})}} />

               </View>

            </View>
         </Modal>
      </View>
   )
}
}

export default ModalExample

const styles = StyleSheet.create ({
   container : {
      flex : 1,
      marginTop : 100
   },
   textstyle : {
      fontsize: 80
   },
   modalview : {
      flex : 1,
      backgroundColor : 'Red'
   },
   interModal : {
      backgroundColor : 'black',
      margin : 50,
      padding : 40,
      borderRadius : 10
   },
   modelStyle : {
      fontSize : 50
   }

})

/* class ModalExample extends Component {
   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      return (
         <View style = {styles.container}>
            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>
                  
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>Open Modal</Text>
            </TouchableHighlight>
         </View>
      )
   }
}
export default ModalExample

const styles = StyleSheet.create ({
   container: {
      flex : 1,
      alignItems: 'center',
      backgroundColor: '#000',
      padding: 100
   },
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f7021a',
      padding: 100
   },
   text: {
      color: '#3f2949',
      marginTop: 10
   }
})
*/