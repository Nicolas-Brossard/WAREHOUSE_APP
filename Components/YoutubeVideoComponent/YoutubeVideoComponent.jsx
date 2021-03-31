import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { WebView } from "react-native-webview";

const YoutubeVideoComponent = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <WebView
      source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N3f7e3j4xno" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
      style={styles.video}
    />
  );
};



const styles = StyleSheet.create({
  video: {
    width: 335,
    height: 200,
  },
});

export default YoutubeVideoComponent;
