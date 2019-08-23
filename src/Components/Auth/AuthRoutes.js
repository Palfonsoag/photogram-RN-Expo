import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Add from "./AddView/Add";
import Follow from "./FollowView/Follow";
import Home from "./HomeView/Home";
import Profile from "./ProfileView/Profile";
import Search from "./SearchView/Search";

//when we implement the tap navigator, all the components declared in the Tab navigator are mounted at the same time

const TabNavigator = createBottomTabNavigator({
  Add: { screen: Add },
  Follow: { screen: Follow },
  Home: { screen: Home },
  Profile: { screen: Profile },
  Search: { screen: Search }
});

export default createAppContainer(TabNavigator);
