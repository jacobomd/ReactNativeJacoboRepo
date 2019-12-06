import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  ImageBackground,
  View,
} from 'react-native';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import {IMAGES_OPTIONS} from '../../../config/images';
import {TextInput} from '../../atoms';


class CharactersAdd extends React.Component {

    state = {
        image: null,
        name: '',
        age: '',
        errors: {},
    };
        
    _onImageTapped= () => {
        ImagePicker.showImagePicker(IMAGES_OPTIONS, (image) => {
            if (image.uri) {
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({image});
            }
        });
    };

    render() {
        const {image, name, age} = this.state;
        return (
            <SafeAreaView style={styles.container}>
            <TouchableOpacity
              onPress={this._onImageTapped}
              style={styles.imageContainer}>
              <ImageBackground
                style={styles.image}
                source={image ? {uri: image.uri} : null}>
                <Text style={styles.imageLabel}>SELECCIONAR FOTO</Text>
              </ImageBackground>
            </TouchableOpacity>
            <View style={{margin: 20}}>
          <TextInput
            label={'Nombre'}
            value={name}
            onChangeText={text => this.setState({name: text})}
            error={''}
            style={{marginBottom: 20}}
          />
          <TextInput
            label={'Edad'}
            value={age}
            onChangeText={age => this.setState({age})}
            error={'dsadasdas'}
          />
        </View>
            </SafeAreaView>
        )
    }
}

export default CharactersAdd;