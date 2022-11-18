import React from "react";
import react, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import FeedScreen from "./Screen/FeedScreen";
import SigninScreen from "./Screen/SigninScreen";
import MapScreen from "./Screen/MapScreen";
import Shell from "./Screen/ShellScreen";


export default function App() {

  
  const [view, setView] = useState("0");

  if (view == "0"){
    return (
      <Shell></Shell>
    );
  }

  else if (view == "1"){
    return (
      <SigninScreen></SigninScreen>
    );
  }

  else if (view == "2"){
    return (
      <FeedScreen></FeedScreen>
    );
  }

  else if (view == "3"){
    return (
      <MapScreen></MapScreen>
    )
  }
}