import React from 'react';
import {StyleSheet, TouchableHighlight, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000bf',
    borderRadius: 30,
    paddingHorizontal: 9,
    paddingVertical: 12,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});

const Button = ({title, onPress}) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={onPress}
      underlayColor="#404040">
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
