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
    <React.Fragment>
      <TextInput
        placeholder={placeholder}
        onChangeText={input.onChange}
        value={input.value}
        keyboardType={keyboardType ? keyboardType : "default"}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize && autoCapitalize}
      ></TextInput>
      <Text>{meta.touched && meta.error && meta.error}</Text>
    </React.Fragment>
  );
};

const validate = values => {
  const errors = {};
  let patt = new RegExp(
    '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
  );

  if (!values.name) {
    errors.name = "Required";
  }
  if (values.name && (values.name.length < 5 || values.name.length > 10)) {
    errors.name = "Name length must be between 5 and 10 characters";
  }
  if (!values.email) {
    errors.email = "Required";
  } else {
    let result = patt.test(values.email);
    if (!result) {
      errors.email = "Must be an valid email address";
    }
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (
    values.password &&
    (values.password.length < 5 || values.password.length > 15)
  ) {
    errors.password = "Password length must be between 5 and 15 characters";
  }
  if (!values.confirmation) {
    errors.confirmation = "Required";
  }
  if (
    values.confirmation &&
    (values.confirmation.length < 5 || values.confirmation.length > 15)
  ) {
    errors.confirmation =
      "Password Confirmation length must be between 5 and 15 characters";
  }

  if (
    values.password &&
    values.confirmation &&
    values.password !== values.confirmation
  ) {
    errors.confirmation = "Your passwords must match";
  }

  return errors;
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
        placeholder={"Password"}
        secureTextEntry
        autoCapitalize={"none"}
      ></Field>
      <Field
        name={"confirmation"}
        component={fieldComponent}
        placeholder={"Password Confirmation"}
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

export default reduxForm({ form: "SignUpForm", validate })(SignUpForm);
