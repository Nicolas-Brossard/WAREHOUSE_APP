import React from 'react';
import {Image, StyleSheet, View} from "react-native";

const CustomImage = () => {
  return(
    <View style={styles.container}>
      <Image
      source={require('../../assets/images/logo_warehouse.jpg')}
      style={styles.imageReward} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    display: 'flex',
    flex: 1,

  },
  imageReward: {
    height: '100%',
  },
});

export default CustomImage;
