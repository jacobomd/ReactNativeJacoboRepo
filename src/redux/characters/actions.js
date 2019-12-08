import * as types from './types';
import {Alert} from 'react-native';
import _ from 'lodash';
import * as api from '../../api';
import {Actions} from 'react-native-router-flux';

const LIMIT = 6;
export const updateList = (list, total) => ({
    type: types.UPDATE_CHARACTERS_LIST,
    value: {list, total},
  });
  
  export const updateItem = value => ({
    type: types.UPDATE_CHARACTERS_ITEM,
    value,
  });
  
  export const updateFetching = value => ({
    type: types.UPDATE_CHARACTERS_FETCHING,
    value,
  });

  export const updateOffset = value => ({
    type: types.UPDATE_CHARACTERS_OFFSET,
    value,
  });
  
  export const initList = () => {
    return dispatch => {
      dispatch(updateList([], 0));
      dispatch(updateOffset(0));
      dispatch(fetchHouseCharactersList());
    };
  };
  
  export const fetchNextPage = () => {
    return (dispatch, getState) => {
      const {offset} = getState().characters;
      dispatch(updateOffset(offset + LIMIT));
      dispatch(fetchHouseCharactersList());
    };
  };
  

 const fetchHouseCharactersList = () => {
    return async (dispatch, getState) => {
      //const house = getState().houses.item
      const {item: house} = getState().houses;
      const {offset, list: prevList} = getState().characters;
      if (!house) {
        return;
      }
  
      try {
        dispatch(updateFetching(true));
        const params = {casa: house.id, offset, limit: LIMIT};
        const getHouseCharactersRes = await api.getHouseCharacters(params);


        const newList = _.get(getHouseCharactersRes, 'data.records', []);
        const list = [...prevList, ...newList];
        const total = parseInt(_.get(getHouseCharactersRes, 'data.total', 0));
        dispatch(updateList(list, total));
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
        dispatch(initList());
  
        Actions.popTo('Characters');
      } catch (e) {
        Alert.alert('Error', 'Error añadiendo el personaje');
      } finally {
        dispatch(updateFetching(false));
      }
    };
  };

  export const deleteCharacter = character => async (dispatch, getState) => {
    if (!character) {
      return;
    }

    try {
      dispatch(updateFetching(true));
      await api.deleteHouseCharacter(character.id);
      dispatch(initList());
      Actions.popTo('Characters');
      dispatch(updateItem(null));
    } catch (e) {
      Alert.alert('Error', 'Error eliminando el personaje');
    } finally {
      dispatch(updateFetching(false));
    }
  };

  export const updateCharacter = data => async (dispatch, getState) => {
    const {item: character} = getState().characters;
    if (!character || !data) {
      return;
    }
  
    try {
      dispatch(updateFetching(true));
      const characterRes = await api.updateHouseCharacter(character.id, data);
      const newCharacter = _.get(characterRes, 'data.record');
      dispatch(updateItem(newCharacter));
      Actions.popTo('CharactersDetail');
    } catch (e) {
      Alert.alert('Error', 'Error actualizando el personaje');
    } finally {
      dispatch(updateFetching(false));
    }
  };
  
  
  
  