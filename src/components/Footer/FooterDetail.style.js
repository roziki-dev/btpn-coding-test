import {StyleSheet} from 'react-native';
import {color, font} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  btn: {
    paddingVertical: 14,
    borderRadius: 14,
  },
  btnTitle: {
    fontFamily: font.poppins_medium,
    textAlign: 'center',
    color: color.white,
    fontSize: 16,
    marginBottom: -4,
  },
});
