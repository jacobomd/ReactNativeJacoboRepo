import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import * as api from '../../../api/index';
import _ from 'lodash';

class Characters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: []
        };
        this._loadHouseCharactersList();
    }

    _loadHouseCharactersList = async () => {
        const houseId = _.get(this.props, 'house.id', null);
        if (houseId === null) {
            return;
        }

        const getHouseCharactersRes = await api.getHouseCharcaters(houseId);
        console.log('ggetHouseCharactersRes', getHouseCharactersRes);
    }

    render() {
        return (
            <SafeAreaView style= {styles.container}>
                
            </SafeAreaView>
        );
    }

}

Characters.propTypes = {
    house: PropTypes.object.isRequired,
  };
  

export default Characters;