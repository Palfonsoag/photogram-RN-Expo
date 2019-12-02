import { createStackNavigator } from "react-navigation";
import Search from "../SearchView/Search";
import Publication from "../PublicationView/Publication";
import Author from "../ProfileView/Profile";

//we already use 'createAppContainer' when we create the TabNavigator in src/AuthRoutes.js
//so, we do not need to add this wrapper this time, if we use this, return us an error

const StackSearch = createStackNavigator(
  {
    Search: Search,
    Publication: Publication,
    Author: Author
  },
  { headerMode: "none" }
);

export default StackSearch;
