import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';

import Card from '../../../common/card-components/Card';
import Separator from './../../../common/Separator';
import CountryCodeSelector from './CountryCodeSelector';

const styles = {
  container: {
    width: '90%',
    alignItems: 'center',
    padding: 20
  },
  textTapStyle: {
    fontWeight: '200'
  },
  loginButtonBar: {
    flexDirection: 'row',
    marginTop: 16
  },
  googleButton: {
    flex: 1,
    backgroundColor: '#dd4b39',
    alignItems: 'center',
    borderRadius: 2,
    marginRight: 6
  },
  facebookButton: {
    flex: 1,
    backgroundColor: '#3b5998',
    alignItems: 'center',
    borderRadius: 2,
    marginLeft: 6
  },
  loginButtonText: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold'
  },
  separatorTextContainer: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: 'rgb(239,239,244)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  separatorText: {
    fontSize: 11
  },
  continueButton: {
    width: '100%',
    backgroundColor: '#ffff99',
    alignItems: 'center',
    padding: 12,
    marginTop: 24
  },
  continueButtonText: {
    fontWeight: 'bold'
  },
  phoneInputBar: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 16
  },
  countrySelector: {
    flex: 2,
    backgroundColor: 'rgb(239,239,244)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  phoneInput: {
    flex: 7,
    padding: 8,
    paddingLeft: 16
  }
};

export default class LoginCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleSelector(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    const {
      container,
      textTapStyle,
      loginButtonBar,
      googleButton,
      loginButtonText,
      facebookButton,
      separatorTextContainer,
      separatorText,
      phoneInputBar,
      countrySelector,
      phoneInput,
      continueButton,
      continueButtonText
    } = styles;
    return (
      <Card style={container}>
        <CountryCodeSelector
          isOpen={this.state.isOpen}
          closeSelector={this.toggleSelector.bind(this, false)}
        />
        <Text style={textTapStyle}>One tap login</Text>
        <View style={loginButtonBar}>
          <TouchableOpacity style={googleButton}>
            <Text style={loginButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={facebookButton}>
            <Text style={loginButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={separatorTextContainer}>
          <Text style={separatorText}>or</Text>
        </View>
        <View style={phoneInputBar}>
          <TouchableOpacity style={countrySelector} onPress={this.toggleSelector.bind(this, true)}>
            <Text>+91&#x25BC;</Text>
          </TouchableOpacity>
          <TextInput
            style={phoneInput}
            placeholder="Enter Mobile Number"
            keyboardType="numeric"
            underlineColorAndroid="transparent"
          />
        </View>
        <Separator />
        <TouchableOpacity style={continueButton}>
          <Text style={continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </Card>
    );
  }
}
