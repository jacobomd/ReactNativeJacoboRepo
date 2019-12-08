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
       props.initList();
    }

    _onEndReached = () => {
      const {charactersTotal, charactersList, charactersFetching} = this.props;
      if (
        charactersList.length &&
        !charactersFetching &&
        charactersTotal > charactersList.length
      ) {
        this.props.fetchNextPage();
      }
    };
  

    _renderItem = ({item}) => {
      return <CharacterCard character={item} />;
    }

    render() {
        const {charactersList, 
          charactersFetching, 
          initList} = this.props;
        return (
            <SafeAreaView style={styles.container}>
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={charactersFetching}
                  onRefresh={initList}
                  colors={['#FFF']}
                  tintColor={'white'}
                />
              }
              onEndReached={this._onEndReached}
              onEndReachedThreshold={0.8}
              data={charactersList}
              renderItem={this._renderItem}
              keyExtractor={(v, i) => `cell-${v.id}`}
              style={styles.list}
            />
          </SafeAreaView>
    
        );
    }

}

Characters.propTypes = {
  charactersList: PropTypes.arrayOf(PropTypes.object),
  charactersTotal: PropTypes.number,
  charactersFetching: PropTypes.bool,
  initList: PropTypes.func,
  fetchNextPage: PropTypes.func,
  };
  

export default Characters;