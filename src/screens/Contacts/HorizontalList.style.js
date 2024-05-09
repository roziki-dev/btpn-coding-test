import {StyleSheet} from 'react-native';
import {color, font} from '../../styles';
import {PADDING} from '../../components/Header/HeaderHome.style';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 16,
  },
  contentContainerStyle: {
    paddingHorizontal: PADDING / 2 - 6,
  },
  titleContainer: {
    paddingHorizontal: PADDING,
    marginBottom: 10,
  },
  titleBody: {
    fontFamily: font.poppins_bold,
    fontSize: 16,
    color: color.title,
    marginTop: 16,
  },
});
