import React, { Component } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import Card from '../../../common/card-components/Card';
import Separator from '../../../common/Separator';

const styles = {
  cardStyle: {
    width: '75%',
    height: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation: 3,
    borderWidth: 2,
    shadowRadius: 8,
    shadowOpacity: 0.5,
    padding: 16
  },
  searchBar: {
    flexDirection: 'row'
  },
  searchInputStyle: {
    fontSize: 18,
    padding: 2
  }
};

export default class CountryCodeSelector extends Component {
  render() {
    const { isOpen, closeSelector } = this.props;
    return (
      <Modal
        transparent
        isVisible={isOpen}
        onRequestClose={closeSelector}
        onBackdropPress={closeSelector}
        backdropColor="rgba(52, 52, 52, 0.8)"
      >
        <Card style={styles.cardStyle}>
          <View style={styles.searchBar}>
            <TextInput style={styles.searchInputStyle} placeholder="Search..." />
          </View>
          <Separator />
          <FlatList />
        </Card>
      </Modal>
    );
  }
}
