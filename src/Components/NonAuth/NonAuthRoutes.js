import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const SignIn = ({ navigation }) => {
  //const navigation = props.navigation;

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
      <Text>Soy un el SignIn</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Ir al SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};
const SignUp = ({ navigation }) => {
  //const navigation = props.navigation;

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
      <Text>Soy el SignUp</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Volver al SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};
const NonAuthRoutes = createStackNavigator(
  {
    SignIn: {
      screen: SignIn
    },
    SignUp: {
      screen: SignUp
    }
  },
  { headerMode: "none", initialRouteName: "SignIn" }
);

export default createAppContainer(NonAuthRoutes);
