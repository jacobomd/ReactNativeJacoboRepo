import React, {Component} from 'react';
import {SafeAreaView, Text, FlatList, View, Alert} from 'react-native';
import styles from './styles';
import { HouseCard } from '../../molecules';
import {Actions} from 'react-native-router-flux';
import * as api from '../../../api';
import _ from 'lodash';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            houses: [],
        };
        this._loadHousesList();
    }

    _loadHousesList = async () => {
/*         api.getHouses()
        .then(res => {
            console.log('getHouses res: ', res);
            this.setState({houses: res.data.records});
        })
        .catch(error => {
            console.log('getHouses error: ', error)
        });

        console.log('YO  NO ESPERO: ', this.state.houses); */
        try {
        const getHousesRes = await api.getHouses();
        const houses = _.get(getHousesRes, 'data.records', []);
        const housesss = {houses: houses}
        this.setState(housesss);
        } catch (e) {
             Alert.alert(
                'Atencion',
                'Ha ocurrido un error, revise su conexion de internet porfavor.',
                ); 
        }
    };

    _onHouseTapped = house => {
        Actions.Characters({house, title: house.nombre});
    };

    _renderItem = ({item}) => {
        return <HouseCard 
            house={item}
            onPress={this._onHouseTapped}
          />;
    
    };

    render() {
        const {houses} = this.state;
        console.log('RENDER: this.state.houses: ', houses);
        return (
            <SafeAreaView style= {styles.container}>
                <FlatList
                data = {houses}
                renderItem = {this._renderItem}
                keyExtractor = {(v, i) => `cell-${v.id}`}
                numColumns = {2} 
                style = {styles.list}
                />
            </SafeAreaView>
        );
    }
}

export default Home;