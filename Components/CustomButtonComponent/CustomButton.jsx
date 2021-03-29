import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from "react-native";

const CustomButton = ({title, onPressCustomButton}) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPressCustomButton}>
        <Text style={styles.text}> {title} </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: '60%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 15,
    elevation: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    padding: 8,
  }
});

export default CustomButton;
