import React from "react";
import react, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import FeedScreen from "./Screen/FeedScreen";
import SigninScreen from "./Screen/SigninScreen";
import MapScreen from "./Screen/MapScreen";
import ShellScreen from "./Screen/ShellScreen";
import MemoScreen from "./Screen/MemoScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="SigninScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="ShellScreen" component={ShellScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // const [view, setView] = useState("4");

  // if (view == "0"){
  //   return (
  //     <Shell></Shell>
  //   );
  // }

  // else if (view == "1"){
  //   return (
  //     <SigninScreen></SigninScreen>
  //   );
  // }

  // else if (view == "2"){
  //   return (
  //     <FeedScreen></FeedScreen>
  //   );
  // }

  // else if (view == "3"){
  //   return (
  //     <MapScreen></MapScreen>
  //   )
  // }

  // else if (view == "4"){
  //   return (
  //     <MemoScreen></MemoScreen>
  //   )
  // }
}