import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './styles';

class HouseCard extends React.Component {
    render() {
        return (
            <TouchableOpacity style = {styles.container}>
                <Image style = {styles.image} />
            </TouchableOpacity>
        )
    }
}

export default HouseCard;