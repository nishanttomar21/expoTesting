import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export default class Screen1 extends React.Component {
  static navigationOptions = {
    title: 'Screen1',
  };

  render() {
    const {navigate} = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Button mode="contained" onPress={() => navigate('Screen2')}>
          PRESS ME!
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
