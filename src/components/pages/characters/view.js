import React from 'react';
import {SafeAreaView, Text, Alert, FlatList, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import * as api from '../../../api/index';
import _ from 'lodash';

class Characters extends React.Component {

    constructor(props) {
        super(props);
       props.fetchHouseCharactersList();
       console.log('this.props: ', this.props);
    }

    render() {
        const {charactersList} = this.props;
       // console.log('charactersList: ', charactersList);
        return (
            <SafeAreaView style={styles.container}>
            <FlatList
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