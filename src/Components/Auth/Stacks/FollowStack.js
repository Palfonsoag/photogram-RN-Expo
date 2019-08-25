import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Home from "../HomeView/Home";
import Author from "../ProfileView/Profile";
import Publication from "../PublicationView/Publication";
import Follow from "../FollowView/Follow";

//we already use 'createAppContainer' when we create the TabNavigator in src/AuthRoutes.js
//so, we do not need to add this wrapper this time, if we use this, return us an error
const TabFollow = createMaterialTopTabNavigator(
  {
    Following: Follow,
    Followers: Follow
  },
  {
    tabBarOptions: {
      tabStyle: {
        paddingTop: 30,
        height: 80
      }
    }
  }
);
const StackFollow = createStackNavigator({
  TabFollow: {
    screen: TabFollow,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Author: Author,
  Publication: Publication
});

export default StackFollow;
