import React from 'react';
import { View, StyleSheet } from 'react-native';
import Label from '../../Components/LabelComponent';
import { TITLE, SUBTITLE, QUESTION } from './messages';
import CustomText from '../../Components/CustomTextComponent';
import CustomTextInput from '../../Components/CustomTextInputComponent';
import AudioComponent from '../../Components/AudioComponent';
import SubLabelComponent from '../../Components/SubLabelComponent';

const getInputValue = (name, value) => {
  console.log(name, value);
};

const input = { name: 'answer', placeholder: 'Votre réponse' };
const icon = { name: 'sc-telegram', type: 'evilicon', color: '#000' };

const BlindTestContainer = () => {
  return (
    <View style={styles.container}>
      <Label title={TITLE}></Label>
      <CustomText message={SUBTITLE} />
      <AudioComponent />
      <SubLabelComponent label={QUESTION}></SubLabelComponent>
      <View>
        <CustomTextInput
          getInputValue={getInputValue}
          name={input.name}
          placeholder={input.placeholder}
          iconName={icon.name}
          iconType={icon.type}
          iconColor={icon.color}
        />
      </View>
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
