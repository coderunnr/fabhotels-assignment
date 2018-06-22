import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import LoginCard from './sub-components/LoginCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(239,239,244)'
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24
  },
  skipText: {
    color: 'gray',
    fontWeight: 'bold'
  },
  skipButton: {
    marginTop: 32
  }
});

export default class Login extends Component {
  render() {
    const skip = 'Skip';
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Log In/Sign Up</Text>
        <LoginCard />
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
