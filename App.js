import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import NonAuthRoutes from "./src/Components/NonAuth/NonAuthRoutes";
import TabNavigator from "./src/Components/Auth/AuthRoutes";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Photogram"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/*<NonAuthRoutes />*/}
        <TabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;
