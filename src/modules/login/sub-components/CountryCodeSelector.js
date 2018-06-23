import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';

import Card from '../../../common/card-components/Card';
import Separator from '../../../common/Separator';
import { countryList } from './../../../constants';

import searchIcon from './../../../resources/icons/search.png';
import flagIcon from './../../../resources/icons/india.png';

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
  searchBarItem: {
    flexDirection: 'row',
    paddingTop: 4,
    paddingBottom: 4
  },
  flagIcon: {
    height: 18,
    width: 18,
    alignSelf: 'center'
  },
  searchInputStyle: {
    fontSize: 18,
    padding: 2,
    width: '100%'
  },
  listItemText: {
    padding: 8,
    fontWeight: '100'
  },
  searchIcon: {
    height: 18,
    width: 18,
    alignSelf: 'center'
  }
};

export default class CountryCodeSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryList
    };
  }

  onSearch(value) {
    this.setState({
      countryList: countryList.filter(country => {
        return country.toLowerCase().includes(value.toLowerCase());
      })
    });
  }

  closeSelector() {
    this.setState({ countryList });
    this.props.closeSelector();
  }

  handleRowClick(item) {
    this.closeSelector();
  }

  renderListItem({ item }) {
    return (
      <TouchableOpacity onPress={this.handleRowClick.bind(this, item)}>
        <View style={styles.searchBarItem}>
          <Image source={flagIcon} style={styles.flagIcon} />
          <Text style={styles.listItemText}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    const { isOpen } = this.props;
    return (
      <Modal
        transparent
        isVisible={isOpen}
        onRequestClose={this.closeSelector.bind(this)}
        onBackdropPress={this.closeSelector.bind(this)}
        backdropColor="rgba(52, 52, 52, 0.8)"
      >
        <Card style={styles.cardStyle}>
          <View style={styles.searchBar}>
            <Image source={searchIcon} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInputStyle}
              placeholder="Search..."
              onChangeText={this.onSearch.bind(this)}
              underlineColorAndroid="transparent"
            />
          </View>
          <Separator />
          <FlatList data={this.state.countryList} renderItem={this.renderListItem.bind(this)} />
        </Card>
      </Modal>
    );
  }
}
