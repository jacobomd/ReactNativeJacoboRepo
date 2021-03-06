import {connect} from 'react-redux';
import {charactersActions} from '../../../redux/characters';
import View from './view';
import {Actions} from 'react-native-router-flux';

const mapStateToProps = state => {
  return {
    charactersList: state.characters.list,
    charactersTotal: state.characters.total,
    charactersOffset: state.characters.offset,
    charactersFetching: state.characters.isFetching,
    
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    initList: () =>
      dispatch(charactersActions.initList()),
      fetchNextPage: () => dispatch(charactersActions.fetchNextPage()),
      updateSelectedCharacter: character => {
        dispatch(charactersActions.updateItem(character));
        Actions.CharactersDetail();
      },
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
