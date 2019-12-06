import React from 'react';
import {SafeAreaView, Text, RefreshControl, FlatList, View} from 'react-native';
import {CharacterCard} from '../../molecules'
import PropTypes from 'prop-types';
import styles from './styles';
import * as api from '../../../api/index';
import _ from 'lodash';

class Characters extends React.Component {

    constructor(props) {
        super(props);
       props.fetchHouseCharactersList();
    }

    _renderItem = ({item}) => {
      return <CharacterCard character={item} />;
    }

    render() {
        const {charactersList, charactersFetching, fetchHouseCharactersList} = this.props;
        return (
            <SafeAreaView style={styles.container}>
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={charactersFetching}
                  onRefresh={fetchHouseCharactersList}
                  colors={['#FFF']}
                  tintColor={'white'}
                />
              }
              data={charactersList}
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
  charactersList: PropTypes.arrayOf(PropTypes.object),
  charactersFetching: PropTypes.bool,
  fetchHouseCharactersList: PropTypes.func,

  };
  

export default Characters;