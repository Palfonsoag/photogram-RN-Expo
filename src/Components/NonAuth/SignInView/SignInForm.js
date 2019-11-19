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
        onBlur={input.onBlur}
        style={styles.textInput}
      ></TextInput>
      <View style={styles.separator}></View>
      <Text style={styles.errorMessage}>
        {meta.touched && meta.error && meta.error}
      </Text>
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
  if (values.name && (values.name.length < 6 || values.name.length > 10)) {
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

  return errors;
};

const SignInForm = props => {
  return (
    <View>
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

      <Button
        title={"Log In"}
        onPress={props.handleSubmit(props.login)}
      ></Button>
      <View style={styles.buttonSpacer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 15
  },
  separator: { height: 2, width: "100%", backgroundColor: "#DCDCDC" },
  buttonSpacer: { height: 15 },
  errorMessage: { color: "red", fontSize: 16 }
});

export default reduxForm({ form: "SignInForm", validate })(SignInForm);
