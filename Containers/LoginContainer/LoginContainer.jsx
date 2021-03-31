import React from 'react';
import Label from "../../Components/LabelComponent";
import CustomTextInput from "../../Components/CustomTextInputComponent";
import {StyleSheet, View} from "react-native";
import CustomButton from "../../Components/CustomButtonComponent";

const LoginContainer = (props) => {

  const inputs = [
    { name: 'mail', placeholder: 'Votre adresse mail' },
    { name: 'password', placeholder: 'Votre mot de passe' },
  ]

  const getInputValue = (name, value) => {
    console.log(name, value);
  }

  // Change le statut en connecté, affichage différent pour la navigation
  const setLogged = () => {
    props.setStatus && (props.setStatus(!props.logged));
  }

  return(
    <View style={styles.container}>
      <Label title="Connectez-vous" />

      <View style={styles.container}>
        {
          inputs.map((input) => {
            return <CustomTextInput key={input.name} getInputValue={getInputValue} name={input.name} placeholder={input.placeholder}/>
          })
        }
      </View>

      <CustomButton title="Connexion" onPressCustomButton={setLogged} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default LoginContainer;
