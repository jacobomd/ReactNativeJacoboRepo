import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './styles';
import _ from 'lodash';

class CharacterCard extends Component {
  render() {
    const {character} = this.props;
    const name = _.get(character, 'nombre', '');
    const age = _.get(character, 'edad', '');
    const imageDir = _.get(character, 'image_dir');
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.age}>{age}</Text>
        </View>
        <Image source={{uri: imageDir}} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
