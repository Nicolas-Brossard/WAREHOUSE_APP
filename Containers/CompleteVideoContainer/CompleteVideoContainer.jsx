import React from 'react';
import { BUTTON_TITLE, VIDEO_TILE } from './messages';
import { View, StyleSheet } from 'react-native';
import VideoComponent from '../../Components/VideoComponent';
import CustomButton from "../../Components/CustomButtonComponent";

const customColor = {
  'position': 'absolute',
  'bottom': '20px',
};

const textStyle = {
  'fontSize': '12px',
}

const CompleteVideoContainer = () => {
  return (
    <View style={styles.container}>
      <VideoComponent />
      <CustomButton customStyle={customColor} textStyle={textStyle} title={BUTTON_TITLE} />
    </View>
  );
};


const styles = StyleSheet.create({
  button: {
    color: 'red',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default CompleteVideoContainer;
