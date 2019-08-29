import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Field, reduxForm } from "redux-form";

const fieldComponent = ({
  input,
  meta,
  placeholder,
  keyboardType,
  secureTextEntry,
  autoCapitalize
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={input.onChange}
      value={input.value}
      keyboardType={keyboardType ? keyboardType : "default"}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize && autoCapitalize}
    ></TextInput>
  );
};

const SignUpForm = props => {
  return (
    <View>
      <Field
        name={"name"}
        component={fieldComponent}
        placeholder={"Name"}
      ></Field>
      <Field
        name={"email"}
        component={fieldComponent}
        placeholder={"email@example.com"}
        keyboardType={"email-address"}
        autoCapitalize={"none"}
      ></Field>
      <Field
        name={"password"}
        component={fieldComponent}
        placeholder={"*****"}
        secureTextEntry
        autoCapitalize={"none"}
      ></Field>
      <Field
        name={"confirmation"}
        component={fieldComponent}
        placeholder={"*****"}
        secureTextEntry
        autoCapitalize={"none"}
      ></Field>

      <Button
        title={"Register"}
        onPress={props.handleSubmit(values => {
          console.log(values);
        })}
      ></Button>
    </View>
  );
};

export default reduxForm({ form: "SignUpForm" })(SignUpForm);
