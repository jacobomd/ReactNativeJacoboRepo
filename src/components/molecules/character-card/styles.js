import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  image: {width: '100%', height: 200, resizeMode: 'cover'},
  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0, 0.6)',
    zIndex: 1,
  },
  name: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    flex: 1,
  },
  age: {color: 'white', fontWeight: '300', fontSize: 16},
});
