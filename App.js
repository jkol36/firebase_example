import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import Input from './components/input';
import Button from './components/button';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.onPressSignin = this.onPressSignin.bind(this)
    this.onPressSignUp = this.onPressSignUp.bind(this)
  }

  state = {
    email: '',
    password: '',
    authenticating: false,
    error:false,
    message:''
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
    });
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch(error => {
      this.setState({
        error:true,
        message:error.message,
        authenticating:false
      })
    })
    .then(() => {
      this.setState({
        error: false,
        message: 'You have logged in!',
        authenticating: false
      })
    })
  }
  onPressSignUp() {
    this.setState({
      authenticating:true
    });
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch(error => {
      this.setState({
        error:true,
        message:error.message,
        authenticating:false
      })
    })
    .then(res => {
      this.setState({
        error:false,
        message: 'You have successfully signed up!',
        authenticating: false
      })
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
    else if(this.state.error === true) {
      return(
        <View style={styles.form}> 
          <Text style={styles.error}> {this.state.message} </Text>
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
          <Button
            style={styles.button}
            onPress={this.onPressSignUp}
          > Sign Up </Button>
        </View>
      )
      
    }
    else {
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
              styles={styles}
              onPress={this.onPressSignin}
            > Log In </Button>
            <Button
                styles={styles}
                onPress={this.onPressSignUp}
              > Sign Up </Button>
          </View>
        )

    }
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
  },
  error: {
    fontSize:18,
    color:'red',
  },
  button: {
    marginTop:10,
    padding:20,
    width:'100%',
    backgroundColor:'green',
    borderRadius:4,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    alignItems:'center',
    fontWeight: '700',
    fontSize: 40,
  },
  buttonText: {
    color:'white',
    fontSize:18
  }
});

