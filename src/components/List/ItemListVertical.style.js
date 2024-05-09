import {Dimensions, StyleSheet} from 'react-native';
import {color, font} from '../../styles';

const Screen = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Screen.width / 5,
  },
  img: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: color.smoke,
  },
  firstName: {
    fontFamily: font.poppins,
    fontSize: 14,
    color: color.title,
    marginTop: 4,
  },
});
