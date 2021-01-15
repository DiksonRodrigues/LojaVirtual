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
import Nos from "./pages/Nos";
import HoteldaVila from "./pages/MaisHoteis/HoteldaVila/hoteldavila";
import Tabs from "../src/component/Tabs";

import Masculino from "../src/pages/Contatos/masculino";
import Feminina from "../src/pages/Contatos/feminina";
import Infantil from "../src/pages/Contatos/infantil";
import Acessorios from "../src/pages/Contatos/acessorios";


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
        <stack.Screen name="HoteldaVila" component={HoteldaVila} />
        <stack.Screen name="Nos" component={Nos} />

        <stack.Screen name="Masculino" component={Masculino} />
        <stack.Screen name="Feminina" component={Feminina} />
        <stack.Screen name="Infantil" component={Infantil} />
        <stack.Screen name="Acessorios" component={Acessorios} />
        


      </stack.Navigator>
   </NavigationContainer> 
  );
}

export default Routes;
