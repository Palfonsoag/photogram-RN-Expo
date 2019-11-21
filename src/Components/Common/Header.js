import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
const Header = ({
  headerContainer,
  onLeftSectionPress,
  onRightSectionPress,
  rightSectionComponent
}) => (
  <View style={[styles.container, headerContainer]}>
    {onLeftSectionPress ? (
      <TouchableOpacity style={styles.leftSection} onPress={onLeftSectionPress}>
        <Ionicons name="md-arrow-round-back" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    ) : (
      <View style={styles.leftSection} />
    )}
    <View style={styles.centerSection}>
      <Text style={styles.title}>PhotoGram</Text>
      <EvilIcons
        name="camera"
        size={32}
        color="#FFFFFF"
        style={{ marginTop: 12 }}
      />
    </View>
    {onRightSectionPress && rightSectionComponent ? (
      <TouchableOpacity
        style={styles.rightSection}
        onPress={onRightSectionPress}
      >
        {rightSectionComponent}
      </TouchableOpacity>
    ) : (
      <View style={styles.rightSection} />
    )}
  </View>
);
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    backgroundColor: "#3E5F8A",
    flexDirection: "row"
  },
  leftSection: {
    paddingTop: 10,
    paddingRight: 25,
    width: "25%",
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  centerSection: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  rightSection: {
    paddingTop: 20,
    width: "25%",
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    alignSelf: "center",
    marginTop: 10
  }
});
export default Header;
