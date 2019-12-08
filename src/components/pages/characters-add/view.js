import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  ImageBackground,
  View,
  ScrollView,
} from 'react-native';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import {IMAGES_OPTIONS} from '../../../config/images';
import {TextInput, Button} from '../../atoms';
import _ from 'lodash';


class CharactersAdd extends React.Component {

    state = {
        image: null,
        name: '',
        age: '',
        errors: {},
    };

    _onSubmit = () => {
      const {image, name, age} = this.state;
      let errors = {};
      if (!name) {
        errors.name = 'Campo obligatorio';
      }

      if (!age) {
        errors.age = 'Campo obligatorio';
      }

      this.setState({errors});
      if (!_.size(errors)) {
        const data = {
          nombre: name,
          edad: age,
          image: _.has(this.state, 'image.data')
            ? 'data:image/jpeg;base64,' + image.data
            : null,
        };
        this.props.postCharacter(data);
      }
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
        const {isFetching} = this.props;
        const {image, name, age, errors} = this.state;
        return (
          <SafeAreaView style={styles.container}>
            <ScrollView 
              keyboardShouldPersistTaps= {'handled'}
              contentContainerStyle={{flexGrow: 1}}
            >
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
              error={_.get(errors, 'name', '')}
              style={{marginVertical: 20}}
              />
              <TextInput
              label={'Edad'}
              value={age}
              onChangeText={age => this.setState({age})}
              style={{marginVertical: 20}}
              error={_.get(errors, 'name', '')}
              />
              </View>
              <Button 
              label={'Guardar'} 
              style={{marginVertical: 20, marginHorizontal: 20}}
              isFetching={isFetching}
              onPress={this._onSubmit}
              />
            </ScrollView>
          </SafeAreaView>
        )
    }
}

export default CharactersAdd;