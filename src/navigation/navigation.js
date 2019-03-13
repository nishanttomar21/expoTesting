import {createStackNavigator, createAppContainer} from 'react-navigation';
import Screen1 from "../screens/screen1";
import Screen2 from "../screens/screen2";

const MainNavigator = createStackNavigator({
  "Screen1": {screen: Screen1},
  "Screen2": {screen: Screen2},
},{
  initialRouteName: "Screen1"
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;