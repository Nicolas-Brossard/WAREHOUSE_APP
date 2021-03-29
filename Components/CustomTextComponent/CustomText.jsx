import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomText = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  text: {
    width: '100%',
  },
});
export default CustomText;
