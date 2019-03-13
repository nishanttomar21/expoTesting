import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import firebase from 'firebase'
import AppContainer from "./navigation/navigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyBkXMaOBnpiY-KrUJAvrm7LHZOsondcmHs",
        authDomain: "wayload-core.firebaseapp.com",
        databaseURL: "https://wayload-core.firebaseio.com",
        projectId: "wayload-core",
        storageBucket: "wayload-core.appspot.com",
        messagingSenderId: "922493820431"
    })
  }

  render() {
    return (
      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
    );
  }
}