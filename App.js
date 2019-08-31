import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import Input from './components/input';
import Button from './components/button';

export default class App extends React.Component {

  state = {
    email: '',
    password: ''
  }

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyD3q5P5dJNJmxqBpvRb1n2LssUue3uM1vc',
      authDomain: 'fir-example-25031.firebaseapp.com'
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <Input 
          placeholder={"Enter your email"}
          label={"Email"}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <Input 
          placeholder={"Enter your password"}
          label={"Password"}
          secureTextEntry
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />

        <Button
          onPress={() => console.log('im pressed')}
        > Log In </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
