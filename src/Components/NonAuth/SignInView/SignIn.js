import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> SignIn </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text>Ir al SignUp</Text>
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
export default SignIn;
