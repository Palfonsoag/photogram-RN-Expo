import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../../Store/Actions/LoginActions";
import { View, Text, StyleSheet, Button } from "react-native";
import SignInForm from "./SignInForm";
import Header from "../../Common/Header";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _login = values => {
    this.props.login(values);
  };

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
          <SignInForm login={this._login} />
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
const mapStateTopProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  login: values => {
    dispatch(loginAction(values));
  }
});
export default connect(mapStateTopProps, mapDispatchToProps)(SignIn);
