import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import Screen1 from "../screens/login";
import Screen2 from "../screens/screen2";

const MyNavigator = createSwitchNavigator({
  "Login": {screen: Screen1},
  "Screen2": {screen: Screen2},
},{
  initialRouteName: "Login"
});

const AppContainer = createBrowserApp(MyNavigator);

export default AppContainer;