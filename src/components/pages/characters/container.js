import {connect} from 'react-redux';
import {charactersActions} from '../../../redux/characters';
import View from './view';

const mapStateToProps = state => {
  return {
    characterslist: state.characters.list,
    charactersFetching: state.characters.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchHouseCharactersList: () =>
      dispatch(charactersActions.fetchHouseCharactersList())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
