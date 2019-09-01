import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import Input from './components/input';
import Button from './components/button';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.onPressSignin = this.onPressSignin.bind(this)
  }

  state = {
    email: '',
    password: '',
    authenticating: false,
  }

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyD3q5P5dJNJmxqBpvRb1n2LssUue3uM1vc',
      authDomain: 'fir-example-25031.firebaseapp.com'
    };

    firebase.initializeApp(firebaseConfig);
  }

  onPressSignin() {
    this.setState({
      authenticating:true
    })
  }

  renderCurrentState() {
    if(this.state.authenticating) {
      return (
        <View style={styles.form}> 
          <ActivityIndicator size='large' />
        </View>
        )
    }
    return (
      <View style={styles.form}>
        <Text style={styles.text}> Welcome! </Text>
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
          onPress={this.onPressSignin}
        > Log In </Button>
      </View>
    )
  }

  render() {
    return (
    <View style={styles.container}>
      {this.renderCurrentState()}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    'justifyContent':'center',
    flexDirection:'row',
  },
  form: {
    flex: 1,
    marginRight:10,
    marginLeft:10
  },
  text: {
    fontSize:70,
    fontWeight: '700'
  }
});
