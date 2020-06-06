
import { Text, View } from 'react-native' 
import styles from './styles';

const Inversion = ({ navigation }) => {
    return (
     <View style={styles.container}>
       <Text>{'Estas en Inversiones, '}</Text>
       <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('Main')}>
           <Text style={styles.textButton} >Next</Text>
       </TouchableHighlight>
     </View>
   );
 }
