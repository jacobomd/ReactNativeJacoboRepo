import {connect} from 'react-redux';
import View from './view';
import {charactersActions} from '../../../redux/characters'

const mapStateToProps = state => {
  return {
    isFetching: state.characters.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    postCharacter: data => dispatch(charactersActions.postCharacter(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
