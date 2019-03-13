import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import Screen1 from "../screens/screen1";
import Screen2 from "../screens/screen2";

const MyNavigator = createSwitchNavigator({
  "Screen1": {screen: Screen1},
  "Screen2": {screen: Screen2},
},{
  initialRouteName: "Screen1"
});

const AppContainer = createBrowserApp(MyNavigator);

export default AppContainer;