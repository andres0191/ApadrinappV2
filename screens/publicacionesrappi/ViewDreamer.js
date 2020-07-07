/* import React, { Component } from 'react';
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
 */