import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const CustomTextInput = ({ getInputValue, name, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        inlineImageLeft="username"
        onChangeText={(value) => getInputValue(name, value)}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 20,
    width: '80%',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  textInput: {
    padding: 12,
    fontSize: 18,
  },
});

export default CustomTextInput;
