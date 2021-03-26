import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './Components/LogoComponent';
import LoginLayout from "./Layouts/LoginLayout";

export default function App() {
  return (
    <>
      <Logo />
      <View style={styles.container}>
        <LoginLayout />
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
