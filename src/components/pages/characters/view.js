import React from 'react';
import {SafeAreaView, Text, Alert, FlatList, View} from 'react-native';
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

        try {
        const getHouseCharactersRes = await api.getHouseCharcaters(houseId);
        const characters = _.get(getHouseCharactersRes, 'data.records', []);
        this.setState({characters})
        } catch (e) {
            Alert.alert(
                'Atencion',
                'Ha ocurrido un error con su conexion a internet.'
            );
        } 
    };

    render() {
        const {characters} = this.state;
        return (
            <SafeAreaView style={styles.container}>
            <FlatList
              data={characters}
              renderItem={({item}) => (
                <View style={{padding: 20}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                    }}>{`${item.nombre} (${item.edad})`}</Text>
                </View>
              )}
              keyExtractor={(v, i) => `cell-${v.id}`}
              style={styles.list}
            />
          </SafeAreaView>
    
        );
    }

}

Characters.propTypes = {
    house: PropTypes.object.isRequired,
  };
  

export default Characters;