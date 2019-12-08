import {connect} from 'react-redux';
import View from './view';
import {charactersActions} from '../../../redux/characters';

const mapStateToProps = state => {
  return {
    character: state.characters.item,
    characterFetching: state.characters.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteCharacter: character =>
    dispatch(charactersActions.deleteCharacter(character)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
