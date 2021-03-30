import React from 'react';
import {Text, StyleSheet, View} from "react-native";

const Label = ({title, size = 35}) =>
  <View>
    <Text style={[styles.text, { fontSize: size }]}> {title} </Text>
  </View>
;

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
  }
});

export default Label;
