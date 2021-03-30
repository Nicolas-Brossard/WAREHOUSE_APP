import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Label from '../../Components/LabelComponent';
import { QUESTION_TITLE, TEXT_QR } from './messages';
import CustomText from '../../Components/CustomTextComponent';
import CustomTextInput from '../../Components/CustomTextInputComponent';

const getInputValue = (name, value) => {
  console.log(name, value);
};

const input = { name: 'answer', placeholder: 'Votre réponse' };
const icon = { name: 'sc-telegram', type: 'evilicon', color: '#000' };

const QuestionContainer = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Label title={QUESTION_TITLE} />
      <CustomText message={TEXT_QR} />
      <CustomTextInput
        getInputValue={getInputValue}
        name={input.name}
        placeholder={input.placeholder}
        iconName={icon.name}
        iconType={icon.type}
        iconColor={icon.color}
      />
    </ScrollView>
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
