import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import firebase from 'firebase'

export default class Login extends React.Component {
  state = {
    id: "",
    pass: ""
  }

  static navigationOptions = {
    title: 'Login',
  };

  render() {
    const {navigate} = this.props.navigation;
    
    return (
      <View>
        <TextInput
            label="Email"
            value={this.state.id}
            onChangeText={text => this.setState({ id: text })}
        />
        <TextInput
            label="Password"
            value={this.state.pwd}
            onChangeText={text => this.setState({ pass: text })}
        />
        <Button mode="contained" onPress={() =>
            firebase.auth().signInWithEmailAndPassword(this.state.id, this.state.pass)
                .then(() => console.log("Success")).catch(e => console.log(e))}>
            Login
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
