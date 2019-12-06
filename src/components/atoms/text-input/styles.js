import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  inputContainer: {},
  inputLabel: {
    color: colors.white,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  inputText: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: colors.white,
  },
  inputError: {
    color: 'red',
    fontSize: 12,
    marginTop: 6,
    textAlign: 'right',
  },
});
