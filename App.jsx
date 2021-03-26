import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './Components/LogoComponent';
import ConnectionLayout from "./Layouts/ConnectionLayout";

export default function App() {
  return (
    <>
      <Logo />
      <View style={styles.container}>
        <ConnectionLayout />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
