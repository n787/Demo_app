//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View ,StatusBar} from 'react-native';
import ViewImageScreen from './components/screens/ViewImageScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';

export default function App() {
  return (
    <View>
      <ViewImageScreen />
        <StatusBar styles={"auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "dodgerblue",
    //width: "100%",
    justifyContent: "center",
    alignItems:"center"
  }
});
