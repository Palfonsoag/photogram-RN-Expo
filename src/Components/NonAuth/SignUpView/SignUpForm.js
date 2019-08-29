import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Field, reduxForm } from "redux-form";

const fieldName = () => {
  return <TextInput placeholder={"Text from Field Name"}></TextInput>;
};

const SignUpForm = props => {
  console.log(props);
  return (
    <View>
      <Field name={"name"} component={fieldName}></Field>
      <Text>redux form</Text>
    </View>
  );
};

export default reduxForm({ form: "SignUpForm" })(SignUpForm);
