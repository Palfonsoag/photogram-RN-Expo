import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";

class Publication extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation, item } = this.props;
    const { width } = Dimensions.get("window");
    const factor = item.width / width;
    const height = item.height / factor;
    return (
      <View>
        <Image source={{ uri: item.secure_url }} style={{ width, height }} />

        {/* <Text> Publication </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Author")}>
          <Text>Author</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
          <Text>Comments</Text>
        </TouchableOpacity> */}
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
export default Publication;
