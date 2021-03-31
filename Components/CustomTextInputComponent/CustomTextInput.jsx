import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

const CustomTextInput = ({
  getInputValue,
  name,
  placeholder,
  iconName,
  iconType,
  iconColor,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        key={name}
        style={styles.textInput}
        inlineImageLeft="username"
        onChangeText={(value) => getInputValue(name, value)}
        placeholder={placeholder}
      />
      {iconName !== null && (
        <Icon name={iconName} type={iconType} color={iconColor} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    width: '80%',
    marginVertical: 10,
  },
  textInput: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  }
});

export default CustomTextInput;
