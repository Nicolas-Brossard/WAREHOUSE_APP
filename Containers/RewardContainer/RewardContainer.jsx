import React from 'react';
import Label from "../../Components/LabelComponent";
import {StyleSheet, View} from "react-native";
import CustomButton from "../../Components/CustomButtonComponent";
import CustomImage from "../../Components/CustomImageComponent";

const RewardContainer = () => {

  const getInputValue = (name, value) => {
    console.log(name, value);
  }

  return(
    <View style={styles.container}>
      <Label title="Vous avez gagnez ..." />

      <Label title="Récompense X" />

      <CustomImage />

      <CustomButton title="Récupérer votre récompense" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    marginVertical: 40,
  },
});


export default RewardContainer;
