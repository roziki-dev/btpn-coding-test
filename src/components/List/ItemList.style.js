import {StyleSheet} from 'react-native';
import {color, font} from '../../styles';
import {PADDING} from '../Header/HeaderHome.style';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: PADDING,
    paddingVertical: 12,
  },
  center: {
    flex: 1,
    marginLeft: 16,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: color.smoke,
  },
  fullName: {
    fontFamily: font.poppins,
    fontSize: 17,
    color: color.title,
  },
  age: {
    fontFamily: font.poppins_light,
    fontSize: 15,
    color: color.description,
  },
});
