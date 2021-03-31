import React from 'react';
import {Image, StyleSheet, View} from "react-native";

const CustomImage = ({urlimage}) => {
  return(
    <View style={styles.container}>
      <Image
      source={urlimage}
      style={styles.imageReward}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    margin: 10,
    flex: 1,
  },
  imageReward: {
    height: '100%',
  },
});

export default CustomImage;
