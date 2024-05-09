import {StyleSheet} from 'react-native';
import {color, font} from '../../styles';

export const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.smoke,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    marginHorizontal: 8,
  },
  btnText: {
    fontSize: 14,
    fontFamily: font.poppins,
    color: color.title,
    marginBottom: -4,
  },
});
