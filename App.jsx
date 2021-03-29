import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './Components/LogoComponent';
import LoginLayout from './Layouts/LoginLayout';
import NewAccountLayout from './Layouts/NewAccountLayout';
import RewardLayout from './Layouts/RewardLayout';
import VideoLayout from './Layouts/VideoLayout';
import QuestionLayout from './Layouts/QuestionLayout';

export default function App() {
  return (
    <>
      <Logo />
      <View style={styles.container}>
        {/* <LoginLayout /> */}
        {/* <NewAccountLayout /> */}
        {/* <RewardLayout /> */}
        {/* <VideoLayout /> */}
        <QuestionLayout />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
