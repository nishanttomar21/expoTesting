import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';


export default class Screen2 extends React.Component {
  static navigationOptions = {
    title: 'Screen2',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button mode="contained" onPress={() => console.log('Button2 Pressed')}>
          PRESSED!
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
