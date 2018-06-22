import React from 'react';
import { View } from 'react-native';

const styles = {
  separator: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'gray'
  }
};

const Separator = () => <View style={styles.separator} />;

export default Separator;
