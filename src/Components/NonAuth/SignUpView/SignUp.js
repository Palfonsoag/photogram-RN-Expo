import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SignUpForm from "./SignUpForm";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> SignUp </Text>
        <SignUpForm></SignUpForm>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Volver al SignIn</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateTopProps = state => {
  return {};
};

export default connect(
  mapStateTopProps,
  {}
)(SignUp);
