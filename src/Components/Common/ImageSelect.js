import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

const getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  }
};
const ImageSelect = ({ image, uploadImage, radius }) => {
  getPermissionAsync();
  const _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    if (!result.cancelled) {
      // this.setState({ image: result.uri });
      uploadImage(result);
    }
  };
  const imageRadius = { borderRadius: radius ? 0 : 80 };
  return (
    <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={_pickImage}>
        {image ? (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 160, height: 160, ...imageRadius }}
          />
        ) : (
          <Image
            source={require("../../../assets/testImage.png")}
            style={{ width: 160, height: 160, ...imageRadius }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 16
  }
});

export default ImageSelect;
