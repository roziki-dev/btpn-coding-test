import {StyleSheet} from 'react-native';
import {color, font} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 48,
    right: 20,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 24,
    elevation: 2,
  },
});
