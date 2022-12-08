import React from "react";
import react, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Switch from "../Component/Switch";
import FeedListItem from "../Component/FeedItem";
import { FeedData } from "../Data/Dummydata";


export default function FeedScreen() {
    const [feedMode, setFeedMode] = useState(2);
    const onSelectMode = (val) => {
        setFeedMode(val);
    };
    
    return (
    <View style={Feedstyles.container}>
        <View style={Feedstyles.switchArea}>
            <Switch
                selectionMode={2}
                option1={'My'}
                option2={'All'}
                onSelectMode={onSelectMode}
                selectionColor={'black'}
            />
        </View>
        <ScrollView style={Feedstyles.FeedList}>
            {FeedData.map((content, i) => {
                if(content.Id == feedMode) {
                return (
                    <View key={i}>
                    <FeedListItem Id={content.Id} text={content.text} date={content.date}/>
                    </View>
                    )
                }
            })}
        </ScrollView>
    </View>
    );
  }


  const Feedstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
    }, 
    switchArea: {
        flex: 0.05,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginBottom: 10,
        width: 300,
        backgroundColor:"white"
    },
    FeedList: {
        flex: 1,
        width: 300,
    },
    
});