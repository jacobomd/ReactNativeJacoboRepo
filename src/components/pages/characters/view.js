import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

class Characters extends React.Component {

    render() {
        return (
            <SafeAreaView style= {styles.container}>
                <Text>CHARACTERS</Text>
            </SafeAreaView>
        );
    }

}

export default Characters;