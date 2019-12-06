import React, {Component} from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import {Home, Characters, CharactersAdd} from '../../pages';
import colors from '../../../assets/colors';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Home" component={Home} hideNavBar={true} />
          <Scene
            key="Characters"
            component={Characters}
            title={'Characters'}
            navigationBarStyle={{backgroundColor: colors.navBar}}
            titleStyle={{color: colors.white}}
            backButtonTextStyle={{color: colors.white}}
            backButtonTintColor={colors.white}
            backTitleEnabled={true}
            backTitle={'Houses'}
            onRight={() => Actions.CharactersAdd()}
            rightTitle={'Crear'}
            rightButtonTextStyle={{color: colors.white}}
          />
          <Scene 
            key="CharactersAdd"
            component={CharactersAdd}
            title={'Crear Personaje'}
            navigationBarStyle={{backgroundColor: colors.navBar}}
            titleStyle={{color: colors.white}}
            backButtonTextStyle={{color: colors.white}}
            backButtonTintColor={colors.white}
            backTitleEnabled={true}
          />
        </Scene>
      </Router>
    );
  }
}

export default Routes;
