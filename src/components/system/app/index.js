import React, {Component} from 'react';
import {YellowBox, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from '../../../config/redux';
import Routes from '../routes';

class App extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
        StatusBar.setBarStyle('light-content', false);
    }
    render() {
        return (
            <Provider store= {store}>
                <Routes />
            </Provider>
        );
    }
}


export default App;