import React from 'react';
import { View, StyleSheet } from 'react-native';
import Label from '../../Components/LabelComponent';
import { TITLE, SUBTITLE, QUESTION } from './messages';
import CustomText from '../../Components/CustomTextComponent';
import CustomTextInput from '../../Components/CustomTextInputComponent';
import AudioComponent from '../../Components/AudioComponent';
import SubLabelComponent from '../../Components/SubLabelComponent';
import {useNavigation} from "@react-navigation/core";
import CustomButton from "../../Components/CustomButtonComponent";

const getInputValue = (name, value) => {
  console.log(name, value);
};

const input = { name: 'answer', placeholder: 'Votre réponse' };
const icon = { name: 'sc-telegram', type: 'evilicon', color: '#000' };

const BlindTestContainer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Label title={TITLE} />
      <View style={{ marginVertical: 20 }}>
        <AudioComponent />
      </View>
      <SubLabelComponent label={QUESTION} />

      <CustomTextInput
        getInputValue={getInputValue}
        name={input.name}
        placeholder={input.placeholder}
        iconName={icon.name}
        iconType={icon.type}
        iconColor={icon.color}
      />
      <CustomButton title="Récompense" onPressCustomButton={() => { navigation.navigate('RewardLayout') }} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
});

export default BlindTestContainer;
