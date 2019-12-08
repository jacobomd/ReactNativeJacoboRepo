import * as types from './types';

const initialState = {
  isFetching: false,
  list: [],
  total: 0,
  offset: 0,
  item: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_CHARACTERS_FETCHING:
      return {
        ...state,
        isFetching: action.value,
      };

    case types.UPDATE_CHARACTERS_LIST:
      return {
        ...state,
        list: action.value.list,
        total: action.value.total,
      };

    case types.UPDATE_CHARACTERS_OFFSET:
      return {
        ...state,
        offset: action.value,
      };
  

    case types.UPDATE_CHARACTERS_ITEM:
      return {
        ...state,
        item: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
