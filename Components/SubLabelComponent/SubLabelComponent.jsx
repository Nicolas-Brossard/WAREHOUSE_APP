import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SubLabelComponent = ({ label }) => (
  <View style={styles.container}>
    <Text style={styles.text}> {label} </Text>
  </View>
);
const styles = StyleSheet.create({
  container: { margin: 10 },
  text: {
    fontSize: 25,
    fontWeight: '700',
  },
});

export default SubLabelComponent;
