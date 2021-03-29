import React from 'react';
import Label from "../../Components/LabelComponent";
import CustomTextInput from "../../Components/CustomTextInputComponent";
import {StyleSheet, View} from "react-native";
import CustomButton from "../../Components/CustomButtonComponent";

const NewAccountContainer = () => {

  const inputs = [
    { name: 'lastname', placeholder: 'Votre nom' },
    { name: 'firstname', placeholder: 'Votre prénom' },
    { name: 'mail', placeholder: 'Votre adresse mail' },
    { name: 'password', placeholder: 'Votre mot de passe' },
    { name: 'confirmpassword', placeholder: 'Confirmer le mot de passe' },
  ]

  const getInputValue = (name, value) => {
    console.log(name, value);
  }

  return(
    <View style={styles.container}>
      <Label title="Créez votre compte" />

      <View style={[styles.container, styles.margin]}>
        {
          inputs.map((input) => {
            return <CustomTextInput getInputValue={getInputValue} name={input.name} placeholder={input.placeholder}/>
          })
        }
      </View>

      <CustomButton title="Valider" />
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
  }
});


export default NewAccountContainer;
