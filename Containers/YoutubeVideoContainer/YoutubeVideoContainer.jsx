import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Label from '../../Components/LabelComponent';
import CustomButton from "../../Components/CustomButtonComponent";
import {useNavigation} from "@react-navigation/core";
import YoutubeVideoComponent from "../../Components/YoutubeVideoComponent/YoutubeVideoComponent";

const YoutubeVideoContainer = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container} >
      <Label title="Le Geai Moqueur présente ..." size={20} />
      <View style={styles.container}>
        <YoutubeVideoComponent />
      </View>
      <CustomButton title="Récompense" onPressCustomButton={() => { navigation.navigate('RewardLayout') }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default YoutubeVideoContainer;
