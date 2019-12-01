import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { blur } from "redux-form";
import ImageSelect from "../../Common/ImageSelect";
import GalleryForm from "./SelectFromGalleryForm";
import {
  uploadPublicationImage,
  clearPublicationImage
} from "../../../Store/Actions/AddPictureActions";
class SelectFromGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    this.props.clearImage();
  }
  _publish = values => {};
  render() {
    const { uploadImage, image } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageSelect image={image} uploadImage={uploadImage} radius />
        </View>
        <View style={styles.textContainer}>
          <GalleryForm image={image} publishAction={() => {}} />
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
  return { image: state.publicationImage.image };
};

const mapDispatchToProps = dispatch => ({
  uploadImage: values => {
    dispatch(uploadPublicationImage(values));
    dispatch(blur("GalleryForm", "image", Date.now()));
  },
  clearImage: () => {
    dispatch(clearPublicationImage());
  }
});
export default connect(mapStateTopProps, mapDispatchToProps)(SelectFromGallery);
