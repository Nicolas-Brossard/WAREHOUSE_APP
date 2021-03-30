import React from 'react';
import { TEXT_VIDEO, VIDEO_TILE } from './messages';
import { ScrollView, View, StyleSheet } from 'react-native';
import Label from '../../Components/LabelComponent';
import CustomText from '../../Components/CustomTextComponent';
import VideoComponent from '../../Components/VideoComponent';

const VideoContainer = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} >
      <Label title={VIDEO_TILE} />
      <View style={styles.container}>
        <VideoComponent />
        <CustomText message={TEXT_VIDEO} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default VideoContainer;
