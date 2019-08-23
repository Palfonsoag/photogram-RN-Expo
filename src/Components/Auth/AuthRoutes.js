import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Add from "./AddView/Add";
import Follow from "./FollowView/Follow";
import Home from "./HomeView/Home";
import Profile from "./ProfileView/Profile";
import Search from "./SearchView/Search";

const TabNavigator = createBottomTabNavigator({
  Add: { screen: Add },
  Follow: { screen: Follow },
  Home: { screen: Home },
  Profile: { screen: Profile },
  Search: { screen: Search }
});

export default createAppContainer(TabNavigator);
