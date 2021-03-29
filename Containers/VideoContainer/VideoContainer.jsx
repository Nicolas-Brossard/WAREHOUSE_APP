import React from 'react';
import { TEXT_VIDEO, VIDEO_TILE } from './messages';
import { View, StyleSheet } from 'react-native';
import Label from '../../Components/LabelComponent';
import CustomText from '../../Components/CustomTextComponent';
import VideoComponent from '../../Components/VideoComponent';

const VideoContainer = () => {
  return (
    <>
      <Label title={VIDEO_TILE} />
      <View style={styles.container}>
        <VideoComponent />
        <CustomText message={TEXT_VIDEO} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default VideoContainer;
