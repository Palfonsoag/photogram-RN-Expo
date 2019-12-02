import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { authentication } from "../../../Store/Services/Firebase";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Profile </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Publication")}>
          <Text>Publication</Text>
        </TouchableOpacity>
        <Button
          title={"Log Out"}
          onPress={() => {
            authentication.signOut();
          }}
        ></Button>
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
export default Profile;
