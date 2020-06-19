import { StyleSheet } from 'react-native';
import Color from '../../../source/utils/Colors';

const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: Color.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    height: 50,
    minWidth: 312,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    color: Color.purple,
    backgroundColor: Color.lightpurple,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 20,
  },
  textheader: {
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    padding: 15,

  },
  prevButton: {
    marginTop: 10,
    padding: 10,
    marginLeft: 10,
  },
  options: {
    flexDirection: 'row',
  },
})

export default styles