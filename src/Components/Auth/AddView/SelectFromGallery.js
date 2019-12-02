import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { connect } from "react-redux";
import { blur } from "redux-form";
import ImageSelect from "../../Common/ImageSelect";
import GalleryForm from "./SelectFromGalleryForm";
import {
  uploadPublicationImage,
  clearPublicationImage,
  submitPublication,
  clearPublicationState
} from "../../../Store/Actions/AddPictureActions";
class SelectFromGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    this.props.clearImage();
  }
  _publish = values => {
    this.props.submit(values);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.success !== nextProps.success) {
      if (nextProps.success === "SUCCEED") {
        Alert.alert(
          "SUCCESS",
          "your publications has been uploaded",
          [
            {
              text: "ok",
              onPress: () => {
                this.props.clearState();
                this.props.navigation.goBack();
              }
            }
          ],
          { cancelable: false }
        );
      }
      if (nextProps.success === "FAIL") {
        Alert.alert(
          "Error",
          "error while uploading you publication",
          [
            {
              text: "ok",
              onPress: () => {
                this.props.clearState();
                this.props.navigation.goBack();
              }
            }
          ],
          { cancelable: false }
        );
      }
    }
  }

  render() {
    const { uploadImage, image } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageSelect image={image} uploadImage={uploadImage} radius />
        </View>
        <View style={styles.textContainer}>
          <GalleryForm image={image} publishAction={this._publish} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white"
  },
  imageContainer: {
    flex: 2
  },
  textContainer: {
    flex: 2
  },
  buttonContainer: {
    flex: 1
  }
});

const mapStateTopProps = state => {
  return {
    image: state.publicationImage.image,
    success: state.publicationImage.success
  };
};

const mapDispatchToProps = dispatch => ({
  uploadImage: values => {
    dispatch(uploadPublicationImage(values));
    dispatch(blur("GalleryForm", "image", Date.now()));
  },
  clearImage: () => {
    dispatch(clearPublicationImage());
  },
  submit: values => {
    dispatch(submitPublication(values));
  },
  clearState: () => {
    dispatch(clearPublicationState());
  }
});
export default connect(mapStateTopProps, mapDispatchToProps)(SelectFromGallery);
