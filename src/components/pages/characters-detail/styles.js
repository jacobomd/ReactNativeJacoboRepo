import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  infoBox: {flexDirection: 'row', marginHorizontal: 20, marginTop: 20},
  label: {flex: 1, color: colors.white},
  value: {color: colors.white, fontWeight: '500'},
  editButton: {marginTop: 40, marginHorizontal: 20},
  deleteButton: {
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 20,
    backgroundColor: 'rgba(255,0,0,0.2)',
  },
});

