import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SignInForm from "./SignInForm";
import Header from "../../Common/Header";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <React.Fragment>
        <Header
          onRightSectionPress={() => navigation.navigate("SignUp")}
          rightSectionComponent={
            <Text style={styles.rightHeaderComponent}>Sign Up</Text>
          }
        />
        <View style={styles.container}>
          <SignInForm />
          <View />
        </View>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 16
  },
  rightHeaderComponent: {
    fontSize: 15,
    color: "#FFFFFF",
    alignSelf: "center",
    marginBottom: 15,
    marginLeft: 10
  }
});
export default SignIn;
