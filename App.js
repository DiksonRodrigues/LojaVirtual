import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { AppLoading } from "expo";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

import Routes from "./src/router";



export default function App() {
  
  console.disableYellowBox = true;

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="ligth" backgroundColor="#F0f0f0" translucent={true}/>
      <Routes/>
    </>
    
  );
}
