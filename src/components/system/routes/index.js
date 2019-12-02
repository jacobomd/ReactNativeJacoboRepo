import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {Home, Characters} from '../../pages';
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
          />
        </Scene>
      </Router>
    );
  }
}

export default Routes;
