import React from "react";
import react, { useState } from "react";

import InitialLoadingScreen from "./Screen/InitialLoadingScreen";
import SigninScreen from "./Screen/SigninScreen";
import LoginProfileScreen from "./Screen/LoginProfileScreen";
import ShellScreen from "./Screen/ShellScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="InitialLoadingScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="InitialLoadingScreen" component={InitialLoadingScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="LoginProfileScreen" component={LoginProfileScreen} />
        <Stack.Screen name="ShellScreen" component={ShellScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
