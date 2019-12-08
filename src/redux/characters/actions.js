import * as types from './types';
import {Alert} from 'react-native';
import _ from 'lodash';
import * as api from '../../api';
import {Actions} from 'react-native-router-flux';

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
        dispatch(updateList(characters));
      } catch (e) {
        Alert.alert(
          'Atención',
          'Ha ocurrido un error, revise su conexión a internet',
        );
      } finally {
        dispatch(updateFetching(false));
      }
    };
  };

  export const postCharacter = data => {
    return async (dispatch, getState) => {
      const {item: house} = getState().houses;
      if (!house) {
        return;
      }
      try {
        dispatch(updateFetching(true));
        const characterData = {...data, casa: house.id};

        // OPT 1
        // const {list} = getState().characters;
        // const characterRes = await api.postHouseCharacter(characterData);
        // const newCharacter = _.get(characterRes, 'data.record');
        // const newList = [...list, newCharacter];
        // dispatch(updateList(newList));

        // OPT 2
        await api.postHouseCharacter(characterData);
        dispatch(fetchHouseCharactersList());
        //dispatch(initList());
  
        Actions.popTo('Characters');
      } catch (e) {
        Alert.alert('Error', 'Error añadiendo el personaje');
      } finally {
        dispatch(updateFetching(false));
      }
    };
  };
  
  