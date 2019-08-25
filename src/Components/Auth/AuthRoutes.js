import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import Add from "./AddView/Add";
import Follow from "./FollowView/Follow";
import StackHome from "./Stacks/HomeStack";
import StackSearch from "./Stacks/SearchStack";
import StackFollow from "./Stacks/FollowStack";
import Profile from "./ProfileView/Profile";
import Comments from "./CommentsView/Comments";

//when we implement the tap navigator, all the components declared in the Tab navigator are mounted at the same time

const TabNavigator = createBottomTabNavigator(
  {
    Home: StackHome,
    Follow: StackFollow,
    Add: Add,
    Search: StackSearch,
    Profile: Profile
  },
  {
    initialRouteName: "Home"
  }
);

const AuthRoutes = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Comments: Comments
  },
  { initialRouteName: "Tabs" }
);

export default createAppContainer(AuthRoutes);
