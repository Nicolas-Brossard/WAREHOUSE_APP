import React from 'react';
import { Image, StyleSheet, View} from 'react-native';

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
    height: '15%',
    margin: '20px',
    width: 'auto',
  },
  logo: {
    height: '100%',
    resizeMode: 'stretch',
    aspectRatio: 3 / 2,
  },
});

export default Logo;
