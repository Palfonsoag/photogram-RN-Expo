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

class ImageSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { image: null };
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log("hi");
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={this._pickImage}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 160, height: 160, borderRadius: 80 }}
            />
          ) : (
            <Image
              source={require("../../../assets/testImage.png")}
              style={{ width: 160, height: 160, borderRadius: 80 }}
            />
          )}
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
    paddingHorizontal: 16
  }
});

export default ImageSelect;
