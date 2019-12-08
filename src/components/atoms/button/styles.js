import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export const loadingColor = colors.navBar;
export default StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '600',
    color: colors.navBar,
  },
  loading: {
    marginLeft: 10,
  },
});

