import React from "react";
import react, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import FeedScreen from "./Screen/FeedScreen";
import SigninScreen from "./Screen/SigninScreen";
import MapScreen from "./Screen/MapScreen";

export default function App() {

  
  const [view, setView] = useState("3");
  if (view == "1"){
    return (
      <SigninScreen></SigninScreen>
    );
  }

  if (view == "2"){
    return (
      <FeedScreen></FeedScreen>
    );
  }

  if (view == "3"){
    return (
      <MapScreen></MapScreen>
    )
  }
}