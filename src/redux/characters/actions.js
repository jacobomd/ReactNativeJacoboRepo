import * as types from './types';
import {Alert} from 'react-native';
import _ from 'lodash';
import * as api from '../../api';


export const updateList = value => ({
    type: types.UPDATE_CHARACTERS_LIST,
    value: value,
  });
  
  export const updateItem = value => ({
    type: types.UPDATE_CHARACTERS_ITEM,
    value,
  });
  
  export const updateFetching = value => ({
    type: types.UPDATE_CHARACTERS_FETCHING,
    value,
  });

  export const fetchHouseCharactersList = () => {
    return async (dispatch, getState) => {
      //const house = getState().houses.item
      const {item: house} = getState().houses;
      
      if (!house) {
        return;
      }
  
      try {
        dispatch(updateFetching(true));
        const getHouseCharactersRes = await api.getHouseCharacters(house.id);
        const characters = _.get(getHouseCharactersRes, 'data.records', []);
        console.log('characters: ', characters);
        dispatch(updateList(characters));
      } catch (e) {
        console.log('e: ', e);
        Alert.alert(
          'Atención',
          'Ha ocurrido un error, revise su conexión a internet',
        );
      } finally {
        dispatch(updateFetching(false));
      }
    };
  };
  
  