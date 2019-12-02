import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
class Publication extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation, item, author } = this.props;
    const { width } = Dimensions.get("window");
    const factor = item.width / width;
    const height = item.height / factor;
    return (
      <View>
        <View style={styles.header}>
          <Image
            source={{ uri: author.urlPerfil }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              marginRight: 15,
              marginLeft: 5,
              marginVertical: 5
            }}
          />
          <Text>{author.nombre}</Text>
        </View>

        <Image source={{ uri: item.secure_url }} style={{ width, height }} />
        <View style={styles.footer}>
          <View style={styles.icons}>
            <Ionicons name={"md-heart-empty"} color={"#3E5F8A"} size={22} />
            <Ionicons name={"md-chatboxes"} color={"#3E5F8A"} size={22} />
          </View>
          <View style={styles.caption}>
            <Text>{item.caption}</Text>
          </View>

          <Text>Comments</Text>
        </View>
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
  },
  header: { flexDirection: "row", alignItems: "center" },
  footer: { marginHorizontal: 10 },
  icons: {
    marginVertical: 15,
    width: "15%",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  caption: { marginBottom: 15 }
});
export default Publication;
