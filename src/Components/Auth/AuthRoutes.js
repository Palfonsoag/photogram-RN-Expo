import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import Add from "./AddView/Add";
import Follow from "./FollowView/Follow";
import StackHome from "./Stacks/HomeStack";
import Profile from "./ProfileView/Profile";
import Search from "./SearchView/Search";
import Comments from "./CommentsView/Comments";

//when we implement the tap navigator, all the components declared in the Tab navigator are mounted at the same time

const TabNavigator = createBottomTabNavigator(
  {
    Add: { screen: Add },
    Home: { screen: StackHome },
    Follow: { screen: Follow },
    Search: { screen: Search },
    Profile: { screen: Profile }
  },
  {
    initialRouteName: "Home"
  }
);

const AuthRoutes = createStackNavigator(
  {
    Tabs: TabNavigator,
    Comments: Comments
  },
  { headerMode: "none", initialRouteName: "Tabs" }
);

export default createAppContainer(AuthRoutes);
