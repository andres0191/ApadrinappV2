import { StyleSheet } from 'react-native';
import Color from '../../source/utils/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    height: 50,
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
    height: 200,
    width: 160,
  },
  MenuOptions: {
    flexDirection: 'column'
  },
  headerLeft : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 10,
    paddingBottom: 12,
    backgroundColor: Color.lightpurple
  },
  header : {
    flex : .1,
    paddingTop: 22,
    marginBottom: -90
  },
});

export default styles