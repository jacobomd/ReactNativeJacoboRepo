import React, {Component} from 'react';
import {YellowBox} from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux';
import {Home, Characters} from '../../pages'

class App extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps'])
    }
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="Home" component={Home} />
                    <Scene key="Characters" component={Characters} />
                </Scene>
            </Router>
        );
    }
}


export default App;