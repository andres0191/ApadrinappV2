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
    maxHeight: 50,
    minWidth: 250,
    maxWidth: 250,
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
  },
  Eye: {
    height: 25,
    width: 40,
    marginLeft: -122
  },
  PassIn: {
    minHeight: 50,
    maxHeight: 50,
    minWidth: 250,
    maxWidth: 250,
    borderWidth: 1,
    borderColor: Color.yellow,
    paddingHorizontal: 15,
    backgroundColor: Color.lightpurple,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  PassText: {
    fontSize: 20,
    color: Color.purple,
  },
});

export default styles