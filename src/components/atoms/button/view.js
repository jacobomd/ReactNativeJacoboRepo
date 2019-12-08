import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import styles, {loadingColor} from './styles';

export default class Button extends React.Component {
  render() {
    const {label, style, isFetching, onPress} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={isFetching ? 1 : 0.2}
        style={{...styles.button, ...style}}
        onPress={isFetching ? null : onPress}>
        <Text style={styles.label}>{label}</Text>
        {isFetching ? (
          <ActivityIndicator style={styles.loading} color={loadingColor} />
        ) : null}
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  label: '',
  style: {},
};

Button.propTypes = {
    label: PropTypes.string,
    style: PropTypes.object,
    onPress: PropTypes.func,
    isFetching: PropTypes.bool,
  };
  