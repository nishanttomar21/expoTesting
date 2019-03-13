import {createStackNavigator, createAppContainer} from 'react-navigation';
import Screen1 from "../screens/login";
import Screen2 from "../screens/screen2";

const MainNavigator = createStackNavigator({
  "Login": {screen: Screen1},
  "Screen2": {screen: Screen2},
},{
  initialRouteName: "Login"
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;