import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

const stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <stack.Screen name="Detail" component={Detail} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
