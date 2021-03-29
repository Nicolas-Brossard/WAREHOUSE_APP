import React from 'react';
import Label from "../../Components/LabelComponent";
import CustomTextInput from "../../Components/CustomTextInputComponent";
import {StyleSheet, View} from "react-native";
import CustomButton from "../../Components/CustomButtonComponent";

const LoginContainer = () => {

  const inputs = [
    { name: 'mail', placeholder: 'Votre adresse mail' },
    { name: 'password', placeholder: 'Votre mot de passe' },
  ]

  const getInputValue = (name, value) => {
    console.log(name, value);
  }

  return(
    <View style={styles.container}>
      <Label title="Connectez-vous" />

      <View style={[styles.container, styles.margin]}>
        {
          inputs.map((input) => {
            return <CustomTextInput getInputValue={getInputValue} name={input.name} placeholder={input.placeholder}/>
          })
        }
      </View>

      <CustomButton title="Connexion" />
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
    marginVertical: 100,
  }
});


export default LoginContainer;
