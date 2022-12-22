import React from "react";
import react, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import FeedItem from "./FeedItem";



export default function FeedScreen(
    {
        memoData
    }
) {
    
    return (
    <View style={Feedstyles.container}>
        <ScrollView style={Feedstyles.FeedList}>
            {memoData.map((content, i) => {
                if(content.type == "public") {
                return (
                    <View key={i}>
                    <FeedItem user_id={content.user_id} type={content.type} text={content.text} 
                    // memo_loc={content.memo_loc}
                    />
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
    FeedList: {
        flex: 1,
        width: 300,
    },
    
});