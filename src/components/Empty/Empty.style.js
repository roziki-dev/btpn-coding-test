import {StyleSheet, Dimensions} from 'react-native';
import {color, font} from '../../styles';

const Screen = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: Screen.height * 0.4,
  },
  contentLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextLoading: {
    fontFamily: font.poppins_regular,
    fontSize: 15,
    color: color.description,
    marginTop: 16,
  },
  titleEmpty: {
    fontFamily: font.poppins_bold,
    fontSize: 16,
    color: color.title,
    marginTop: 16,
  },
  messageEmpty: {
    fontFamily: font.poppins_regular,
    fontSize: 15,
    color: color.description,
    marginTop: 4,
  },
  iconEmpty: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: color.smoke,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
