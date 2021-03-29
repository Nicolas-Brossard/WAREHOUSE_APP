import React from 'react';
import {TextInput, StyleSheet, View} from "react-native";

const CustomTextInput = ({getInputValue, name, placeholder}) => {
  return(
    <View style={styles.container}>
      <TextInput
        key={name}
        style={styles.textInput}
        onChangeText={(value) => getInputValue(name, value)}
        placeholder={placeholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 20,
    width: '80%',
    marginVertical: 10,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
  }
});

export default CustomTextInput;
