
import React from 'react';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from "../../pages/Home";
import Contatos from "../../pages/Contatos";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  Contatos:{
    name: 'ios-call'
  },
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
          activeTintColor: 'orangered',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Contatos" component={Contatos} />
      </Tab.Navigator>
     
  );
}
