import React from 'react';
import { View, StyleSheet } from 'react-native';
import Label from '../../Components/LabelComponent';
import { QUESTION_TITLE, TEXT_QR } from './messages';
import CustomText from '../../Components/CustomTextComponent';
import CustomTextInput from '../../Components/CustomTextInputComponent';
import { Icon } from 'react-native-elements';

const getInputValue = (name, value) => {
  console.log(name, value);
};

const input = { name: 'answer', placeholder: 'Votre réponse' };

const QuestionContainer = () => {
  return (
    <View style={styles.container}>
      <Label title={QUESTION_TITLE}></Label>
      <CustomText message={TEXT_QR} />
      <CustomTextInput
        getInputValue={getInputValue}
        name={input.name}
        placeholder={input.placeholder}
      />
      <Icon name="sc-telegram" type="evilicon" color="#00aced" />
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

export default QuestionContainer;
