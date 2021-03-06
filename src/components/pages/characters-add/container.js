import {connect} from 'react-redux';
import {CharacterForm} from '../../organisms';
import {charactersActions} from '../../../redux/characters'

const mapStateToProps = state => {
  return {
    isFetching: state.characters.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: data => dispatch(charactersActions.postCharacter(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterForm);
