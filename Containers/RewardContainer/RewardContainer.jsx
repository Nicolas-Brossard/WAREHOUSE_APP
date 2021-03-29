import React from 'react';
import Label from "../../Components/LabelComponent";
import {StyleSheet, View} from "react-native";
import CustomButton from "../../Components/CustomButtonComponent";
import CustomImage from "../../Components/CustomImageComponent";

const RewardContainer = () => {

  return(
    <View style={styles.container}>
      <Label title="Vous avez gagnez ..." />

      <CustomImage 
      urlimage={require('../../assets/images/warehouse_nantes.jpg')}/>

      <Label title="Récompense X" />
      <View style={[styles.button]}>

        <CustomButton title="Récupérer votre récompense" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});


export default RewardContainer;
