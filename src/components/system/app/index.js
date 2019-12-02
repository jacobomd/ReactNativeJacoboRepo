import React, {Component} from 'react';
import {YellowBox, StatusBar} from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux';
import {Home, Characters} from '../../pages'
import colors from '../../../assets/colors';

class App extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
        StatusBar.setBarStyle('light-content', false);
    }
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="Home" component={Home} hideNavBar={true}/>
                    <Scene 
                        key="Characters"
                        component={Characters}
                        title={'Chararcters'}
                        navigationBarStyle={{backgroundColor: colors.navBar}}
                        titleStyle={{color: colors.white}}
                        backButtonTextStyle={{color: colors.white}}
                        backButtonTintColor={colors.white}
                        backTitleEnable={true}
                        backTitle={'Houses'}
                    />
                </Scene>
            </Router>
        );
    }
}


export default App;