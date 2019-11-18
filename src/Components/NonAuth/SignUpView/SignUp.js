import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import SignUpForm from "./SignUpForm";
import Header from "../../Common/Header";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _register = values => {
    this.props.registro(values);
  };

  render() {
    const { navigation } = this.props;
    return (
      <React.Fragment>
        <Header onLeftSectionPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <SignUpForm registerAction={this._register} />
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
  }
});

const mapStateTopProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  registro: values => {
    dispatch({ type: "REGISTRO", datos: values });
  }
});
export default connect(mapStateTopProps, mapDispatchToProps)(SignUp);
