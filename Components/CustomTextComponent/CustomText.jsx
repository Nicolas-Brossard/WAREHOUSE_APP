import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomText = (props) => (
  <View style={styles.container}>
    <Text>{props.message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
});
export default CustomText;
