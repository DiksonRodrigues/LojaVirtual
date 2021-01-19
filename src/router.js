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
import Tabs from "../src/component/Tabs";

import Masculino from "../src/pages/Contatos/masculino";
import Feminina from "../src/pages/Contatos/feminina";
import Infantil from "../src/pages/Contatos/infantil";
import Acessorios from "../src/pages/Contatos/acessorios";

import MaisHoteis from "../src/pages/MaisHoteis";
import MaisBarracas from "../src/pages/MaisBarracas";
import MaisExcursao from "../src/pages/MaisExcursao";
import MaisRestaurantes from "../src/pages/MaisRestaurantes";



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
        <stack.Screen name="Nos" component={Nos} />

        <stack.Screen name="MaisHoteis" component={MaisHoteis} />
        <stack.Screen name="MaisBarracas" component={MaisBarracas} />
        <stack.Screen name="MaisExcursao" component={MaisExcursao} />
        <stack.Screen name="MaisRestaurantes" component={MaisRestaurantes} />


        <stack.Screen name="Masculino" component={Masculino} />
        <stack.Screen name="Feminina" component={Feminina} />
        <stack.Screen name="Infantil" component={Infantil} />
        <stack.Screen name="Acessorios" component={Acessorios} />
        


      </stack.Navigator>
   </NavigationContainer> 
  );
}

export default Routes;
