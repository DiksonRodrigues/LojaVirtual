
import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import Icon from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from "../../pages/Home";
import Contatos from "../../pages/Contatos";
import Favoritos from "../../pages/Favoritos";
import Dicas from "../../pages/Dicas";
import Mais from "../../pages/Mais";

const Tab = createBottomTabNavigator();

const icons = {
  Início: {
    name: 'ios-home'
  },
  Contatos:{
    name: 'ios-call'
  },
  Favoritos:{
    name: 'ios-heart'
  },
  Dicas: {
    name: 'ios-bulb'
  },
  Mais: {
    name: 'ios-keypad'
  }
};

export default function App() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size}/>
          }
        }) }

        tabBarOptions={{
          
          style:{
          backgroundColor: '#F8F8FF',
          },
          activeTintColor: 'orangered',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Início" component={Home} />
        <Tab.Screen name="Contatos" component={Contatos} />
        <Tab.Screen name="Favoritos" component={Favoritos} />
        <Tab.Screen name="Dicas" component={Dicas} />
        <Tab.Screen name="Mais" component={Mais} />
      </Tab.Navigator>
     
  );
}
