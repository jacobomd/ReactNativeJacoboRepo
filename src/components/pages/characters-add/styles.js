import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  imageContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.white,
    overflow: 'hidden',
    margin: 20,
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLabel: {
    color: colors.white,
    fontWeight: '600',
  },
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
