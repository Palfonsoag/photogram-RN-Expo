import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { registerAction } from "../../../Store/Actions/RegisterActions";
import SignUpForm from "./SignUpForm";
import Header from "../../Common/Header";
import ImageSelect from "../../Common/ImageSelect";
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
          <ImageSelect />
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
    dispatch(registerAction(values));
  }
});
export default connect(mapStateTopProps, mapDispatchToProps)(SignUp);
