import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Button
          title={"Gallery"}
          onPress={() => navigation.navigate("SelectFromGallery")}
        />
        <View style={{ height: 40, width: "100%" }}></View>
        <Button title={"Camera"} onPress={() => navigation.navigate()} />
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

export default Add;
