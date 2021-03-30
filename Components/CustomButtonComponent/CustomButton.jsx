import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from "react-native";

const CustomButton = ({title, onPressCustomButton, customStyle = {}, textStyle={}}) => {
  return(
    <View style={[styles.container, customStyle ? customStyle : '']}>
      <TouchableOpacity onPress={() => onPressCustomButton()}>
        <Text style={[styles.text, textStyle ? textStyle : '']}> {title} </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: '60%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    padding: 8,
  }
});

export default CustomButton;
