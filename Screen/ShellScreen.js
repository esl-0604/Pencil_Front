import React from "react";
import react, { useEffect, useState } from "react";
import { View, Text, Dimensions, StatusBar, SafeAreaView } from "react-native";



export default function Shell() {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <StatusBar
                animated={true}
                backgroundColor={"white"}
                barStyle={"default"}
                hidden={"hidden"}
                />
            <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightpink",
            }}>
            <Text>asdf</Text>
            </View>
        </SafeAreaView>
        
    );
}