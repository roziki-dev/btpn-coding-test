import {Dimensions, StyleSheet} from 'react-native';
import {color, font} from '../../styles';

const Screen = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    // paddingHorizontal: 16,
  },
  body: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  boxUpload: {
    alignSelf: 'center',
    width: Screen.width / 2,
    height: Screen.width / 2,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: color.placeholder,
    borderStyle: 'dashed',
    justifyContent: 'center',
    marginBottom: 16,
    overflow: 'hidden',
    padding: 4,
  },
  img: {
    width: Screen.width / 2 - 8,
    height: Screen.width / 2 - 8,
    borderRadius: 16,
  },
  textUpload: {
    textAlign: 'center',
    fontFamily: font.poppins_medium,
    color: color.description,
    fontSize: 16,
  },
  label: {
    fontFamily: font.poppins_medium,
    color: color.description,
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: color.placeholder,
    paddingHorizontal: 16,
    borderRadius: 16,
    fontFamily: font.poppins,
    fontSize: 16,
    marginVertical: 6,
  },
  wrapInput: {marginTop: 24},
  ph16: {
    paddingHorizontal: 16,
  },
  inputDate: {
    fontFamily: font.poppins,
    fontSize: 16,
    paddingVertical: 10,
  },
});
