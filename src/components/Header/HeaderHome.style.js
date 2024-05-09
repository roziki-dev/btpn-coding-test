import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {color, font} from '../../styles';

export const PADDING = 24;

const Screen = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight + PADDING,
    paddingBottom: PADDING,
    width: '100%',
  },
  title: {
    fontFamily: font.poppins_medium,
    fontSize: 28,
    color: color.title,
  },
  search: {
    marginTop: 16,
    backgroundColor: color.smoke,
    width: Screen.width - PADDING * 2,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderColor: color.placeholder,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontFamily: font.poppins_regular,
    fontSize: 17,
    color: color.title,
    marginLeft: 16,
  },
  titleBodyContainer: {
    width: '100%',
    paddingHorizontal: PADDING,
  },
  titleBody: {
    fontFamily: font.poppins_bold,
    fontSize: 16,
    color: color.title,
    marginTop: 16,
  },
});
