import { createStackNavigator } from "react-navigation";
import Add from "../AddView/Add";
import SelectFromGallery from "../AddView/SelectFromGallery";

//we already use 'createAppContainer' when we create the TabNavigator in src/AuthRoutes.js
//so, we do not need to add this wrapper this time, if we use this, return us an error

const StackAdd = createStackNavigator(
  {
    Add: { screen: Add },
    SelectFromGallery: {
      screen: SelectFromGallery
    }
  },
  { headerMode: "none" }
);
StackAdd.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
export default StackAdd;
