import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

class Home extends Component {

    render() {
        return (
            <SafeAreaView style= {styles.container}>
                <TouchableOpacity
                onPress={() => Actions.push('Characters', {title: 'Personajes'})}
                 style={{
                    marginTop: 40,
                    backgroundColor: 'lime',
                    padding: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                } }>
                    <Text>{'IR A PERSONAJES'}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

export default Home;