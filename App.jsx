import React from 'react';
import 'react-native-gesture-handler';
import Logo from './Components/LogoComponent';
import Navigation from "./Navigations/Navigation";
import CompleteVideoLayout from "./Layouts/CompleteVideoLayout";
import QuestionLayout from "./Layouts/QuestionLayout";
import VideoLayout from "./Layouts/VideoLayout";
import RewardLayout from "./Layouts/RewardLayout";

export default function App() {
  return (
    <>
      <Logo />
      <RewardLayout />
      {/*<Navigation />*/}
    </>
  );
}
