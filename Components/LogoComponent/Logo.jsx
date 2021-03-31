import React from 'react';
import { Image, StyleSheet, View, Platform } from 'react-native';

const Logo = () => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require('../../assets/images/logo_warehouse.jpg')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: '15%',
    marginTop: 40,
    marginHorizontal: 20,
    alignItems: Platform.OS === 'android' && 'center',
  },
  logo: {
    height: '100%',
    resizeMode: 'stretch',
    aspectRatio: 2,
  },
});

export default Logo;
