import React from 'react';
import { TEXT_VIDEO } from './messages';
import CustomText from '../Components/CustomTextComponent';
import VideoComponent from '../Components/VideoComponent';

const VideoContainer = () => {
  return (
    <>
      <VideoComponent />
      <CustomText message={TEXT_VIDEO} />
    </>
  );
};

export default VideoContainer;
