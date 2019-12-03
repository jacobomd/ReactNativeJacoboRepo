import {connect} from 'react-redux';
import {housesActions} from '../../../redux/houses';
import View from './view';
import {Actions} from 'react-native-router-flux';

const mapStateToProps = state => {
  return {
    housesList: state.houses.list,
    //housesFetching: state.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
   return {
    fetchHouseList: () => {
      dispatch(housesActions.fetchHouseList());
    },

    updateSelectedHouse: house => {
      dispatch(housesActions.updateItem(house));
      Actions.Characters({title: house.nombre});
    },
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(View);
