import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomText = (props) => (
  <View style={styles.container}>
    <Text>{props.message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '10px',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CustomText;
