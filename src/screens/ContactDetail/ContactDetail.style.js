import {StyleSheet} from 'react-native';
import {color, font} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  body: {
    flex: 1,
    paddingHorizontal: 24,
    zIndex: 2,
    backgroundColor: color.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
  },
  photoContainer: {
    alignSelf: 'center',
    marginTop: -60,
    borderColor: color.primary,
    borderWidth: 2,
    borderRadius: 30,
  },
  photoProfile: {
    width: 120,
    height: 120,
    borderRadius: 30,
    backgroundColor: color.white,
    margin: 2,
  },
  name: {
    color: color.title,
    fontFamily: font.poppins_bold,
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  flexHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
