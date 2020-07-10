import { StyleSheet } from 'react-native';
import Color from '../../../source/utils/Colors';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    minHeight: 50,
    maxWidth: 200,
    minWidth: 200,
    borderWidth: 1,
    borderColor: Color.yellow,
    paddingHorizontal: 15,
    color: Color.purple,
    backgroundColor: Color.lightpurple,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 20,
  },
  logo: {
    height: 80,
    width: 200
  },
  MenuOptions: {
    flexDirection: 'column'
  }
});

export default styles