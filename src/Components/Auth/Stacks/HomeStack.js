import { createStackNavigator } from "react-navigation";
import Home from "../HomeView/Home";
import Author from "../ProfileView/Profile";
import Publication from "../PublicationView/Publication";
import Comments from "../CommentsView/Comments";

//we already use 'createAppContainer' when we create the TabNavigator in src/AuthRoutes.js
//so, we do not need to add this wrapper this time, if we use this, return us an error

const StackHome = createStackNavigator({
  Home: { screen: Home },
  Author: { screen: Author },
  Publication: { screen: Publication },
  Comments: { screen: Comments }
});

export default StackHome;
