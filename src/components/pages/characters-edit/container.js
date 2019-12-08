import {connect} from 'react-redux';
import {CharacterForm} from '../../organisms';
import {charactersActions} from '../../../redux/characters'

const mapStateToProps = state => {
  return {
    isFetching: state.characters.isFetching,
    character: state.characters.item,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: data => dispatch(charactersActions.updateCharacter(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterForm);
