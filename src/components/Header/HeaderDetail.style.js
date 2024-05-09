import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {color, font} from '../../styles';

const Screen = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    height: Screen.height * 0.2,
    zIndex: 999,
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 56,
    height: 56,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    marginHorizontal: 16,
    zIndex: 999,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    color: color.primary,
  },
});
