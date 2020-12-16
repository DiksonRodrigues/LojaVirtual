import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";




import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Detail2 from "./pages/Detail2";
import Detail3 from "./pages/Detail3";
import Detail4 from "./pages/Detail4";
import Detail5 from "./pages/Detail5";
import Detail6 from "./pages/Detail6";
import Tabs from "../src/component/Tabs";

const stack = createStackNavigator();
const tab = createBottomTabNavigator();

 function Routes() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <stack.Screen name="Detail" component={Detail} />
        <stack.Screen name="Detail2" component={Detail2} />
        <stack.Screen name="Detail3" component={Detail3} />
        <stack.Screen name="Detail4" component={Detail4} />
        <stack.Screen name="Detail5" component={Detail5} />
        <stack.Screen name="Detail6" component={Detail6} />
      </stack.Navigator>
   </NavigationContainer> 
  );
}

export default Routes;
