import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#ddd',
    borderBottomWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: 'white'
  }
};

const Card = props => (
  <View style={{ ...styles.containerStyle, ...props.style }}>{props.children}</View>
);

export default Card;
