import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {color, font} from '../../styles';

const Screen = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  btn: {
    backgroundColor: color.primary,
    paddingVertical: 14,
    borderRadius: 14
  },
  btnTitle: {
    fontFamily: font.poppins_medium,
    textAlign: 'center',
    color: color.white,
    fontSize: 16
  },
});
