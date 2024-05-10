import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {color, font} from '../../styles';

const Screen = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    height: 56 + StatusBar.currentHeight,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    backgroundColor: color.white,
    borderBottomWidth: 1,
    borderBottomColor: color.smoke,
    marginHorizontal: -16,
  },
  buttonContainer: {
    width: 56,
    height: 56,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    color: color.primary,
  },
  title: {
    fontFamily: font.poppins_medium,
    fontSize: 16,
    textAlign: 'center',
    color: color.title,
  },
});
