import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SignUp from "./SignUpView/SignUp";
import SignIn from "./SignInView/SignIn";

const NonAuthRoutes = createStackNavigator(
  {
    SignIn: SignIn,
    SignUp: SignUp
  },
  { headerMode: "none", initialRouteName: "SignIn" }
);

export default createAppContainer(NonAuthRoutes);
