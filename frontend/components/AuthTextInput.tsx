import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface AuthTextInputProps extends TextInputProps {}

export default function AuthTextInput(props: AuthTextInputProps) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
  },
});
