import React from 'react';
import Label from "../../Components/LabelComponent";
import {StyleSheet, View} from "react-native";
import CustomButton from "../../Components/CustomButtonComponent";
import CustomImage from "../../Components/CustomImageComponent";

const RewardContainer = () => {

  return(
    <View style={styles.container}>

      <Label title="Vous avez gagnez ..." />

      <View style={{flex: 1, marginVertical: 40 }}>
        <CustomImage urlimage={require('../../assets/images/warehouse_nantes.jpg')}/>
      </View>

      <Label title="Récompense X" size={25} />

      <View style={styles.button}>
        <CustomButton title="Récupérer votre récompense" />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
});


export default RewardContainer;
