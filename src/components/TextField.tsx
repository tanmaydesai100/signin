import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

interface TextFieldProps {
  placeholder: string;
  onTextChange: Function;
  val: string;
  secure?: boolean;
}
export const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  onTextChange,
  val,
  secure,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={text => {
          onTextChange(text);
        }}
        value={val}
        secureTextEntry={secure}
        style={styles.textField}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 45,
    borderRadius: 30,
    backgroundColor: '#CBCBCB',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    paddingLeft: 20,
    paddingRight: 10,
  },
  textField: {
    flex: 1,
    height: 50,
    fontSize: 20,
    color: '#000',
  },
});
