import React from 'react';
import {Image, StyleSheet, SafeAreaView} from "react-native";

const Logo = () =>
  <>
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo_warehouse.jpg')}
      />
    </SafeAreaView>
  </>
;

const styles = StyleSheet.create({
  container: {
    height: '25%',
  },
  logo: {
    height: '100%',
    resizeMode: 'stretch',
    aspectRatio: 3/2,
  }
});

export default Logo;
