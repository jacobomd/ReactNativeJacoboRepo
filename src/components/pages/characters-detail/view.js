import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  Dimensions,
  View,
  Alert,
} from 'react-native';
import {Button} from '../../atoms';
import styles from './styles';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

const {width} = Dimensions.get('window');
class CharactersDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imageHeight: 0};

    // GET IMAGE SIZE
    const imageDir = _.get(props, 'character.image_dir');
    if (imageDir) {
      Image.getSize(imageDir, (realImageWidth, realImageHeight) => {
        // CALCULATE ASPECT RATIO
        const imageHeight = (realImageHeight * width) / realImageWidth;
        this.setState({imageHeight: imageHeight});
      });
    }
  }

  _onDelete = character => {
    const name = _.get(character, 'nombre', '');
    Alert.alert('Atención', `¿Desea borrar a ${name}?`, [
      {
        text: 'Aceptar',
        onPress: () => this.props.deleteCharacter(character),
        style: 'destructive',
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  };

  render() {
    const {character, characterFetching} = this.props;
    const {imageHeight} = this.state;
    const name = _.get(character, 'nombre', '');
    const age = _.get(character, 'edad', '').toString();
    const imageDir = _.get(character, 'image_dir');
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Image
            source={{uri: imageDir}}
            style={{...styles.image, height: imageHeight}}
          />
          <View style={{flex: 1}}>
            <InfoBox label={'Nombre'} value={name} />
            <InfoBox label={'Edad'} value={age} />
          </View> 
          <Button
            label={'Editar'}
            style={styles.editButton}
            onPress={Actions.CharactersEdit}
          />
          <Button
            label={'Eliminar'}
            style={styles.deleteButton}
            onPress={() => this._onDelete(character)}
            isFetching={characterFetching}
            />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

CharactersDetail.propTypes = {
  character: PropTypes.object,
  deleteCharacter: PropTypes.func,
};

export default CharactersDetail;

const InfoBox = ({label, value}) => (
  <View style={styles.infoBox}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

InfoBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
