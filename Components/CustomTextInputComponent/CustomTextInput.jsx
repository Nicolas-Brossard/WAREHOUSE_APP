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
    width: 'auto',
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
    width: '80%',
    padding: 12,
    fontSize: 18,
  },
});

export default CustomTextInput;
