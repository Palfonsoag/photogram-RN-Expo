import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import {
  registerAction,
  uploadSignUpImage,
  clearSignUpImage
} from "../../../Store/Actions/RegisterActions";
import SignUpForm from "./SignUpForm";
import Header from "../../Common/Header";
import ImageSelect from "../../Common/ImageSelect";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillUnmount() {
    this.props.clearImage();
  }
  _register = values => {
    this.props.register(values);
  };

  render() {
    const { navigation, image, uploadImage } = this.props;
    return (
      <React.Fragment>
        <Header onLeftSectionPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <ImageSelect image={image} uploadImage={uploadImage} />
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
  return { image: state.signUpImage.image };
};

const mapDispatchToProps = dispatch => ({
  register: values => {
    dispatch(registerAction(values));
  },
  uploadImage: values => {
    dispatch(uploadSignUpImage(values));
  },
  clearImage: () => {
    dispatch(clearSignUpImage());
  }
});
export default connect(mapStateTopProps, mapDispatchToProps)(SignUp);
