import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Field, reduxForm } from "redux-form";

const fieldComponent = ({
  input,
  meta,
  placeholder,
  keyboardType,
  autoCapitalize
}) => {
  return (
    <React.Fragment>
      <TextInput
        placeholder={placeholder}
        onChangeText={input.onChange}
        value={input.value}
        keyboardType={"default"}
        autoCapitalize={"none"}
        onBlur={input.onBlur}
        style={styles.textInput}
        multiline
      ></TextInput>
      <View style={styles.separator}></View>
      <Text style={styles.errorMessage}>
        {meta.touched && meta.error && meta.error}
      </Text>
    </React.Fragment>
  );
};

const validate = (values, props) => {
  const errors = {};

  if (!props.image) {
    errors.image = "The image is Required";
  }

  if (values.caption && values.caption.length > 140) {
    errors.caption = "Caption length must be less than 140 characters";
  }

  return errors;
};

const fieldImage = ({ input, meta }) => {
  return (
    <View>
      <Text style={styles.errorMessage}>
        {meta.touched && meta.error && meta.error}
      </Text>
    </View>
  );
};

const GalleryForm = props => {
  return (
    <View style={{ flex: 3 }}>
      <Field name={"image"} component={fieldImage}></Field>
      <Field
        name={"caption"}
        component={fieldComponent}
        placeholder={"Caption"}
      ></Field>
      <Button
        title={"Publish"}
        onPress={props.handleSubmit(props.publishAction)}
      ></Button>
      <View style={styles.buttonSpacer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 15,
    marginHorizontal: 20
  },
  buttonSpacer: { height: 15 },
  errorMessage: { color: "red", fontSize: 16 }
});

export default reduxForm({ form: "GalleryForm", validate })(GalleryForm);
