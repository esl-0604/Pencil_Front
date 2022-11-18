import React from "react";
import react, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import CustomSwitch from "../Component/Switch";
import FeedListItem from "../Component/FeedItem";
import { FeedData } from "../Data/Dummydata";



const Feedstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
        backgroundColor: "lightpink",
    }, 
    buttonArea: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 100,
        marginBottom: 10,
        width: 300,
        backgroundColor: "lightpink",
    },
    ikonArea: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
        width: 300,
        backgroundColor: "lightpink",
    },
    FeedList: {
        flex: 1,
        width: 300,
        backgroundColor: "lightpink",
    },
    
});

export default function FeedScreen() {
    const [feedMode, setFeedMode] = useState(2);
    const onSelectMode = (val) => {
        setFeedMode(val);
      };
    

    return (
    <View style={Feedstyles.container}>
        <View style={Feedstyles.buttonArea}>
            <CustomSwitch
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
        <View style={Feedstyles.ikonArea}>
            <TouchableOpacity 
                activeOpacity={1}
                onPress={()=>{alert("피드 추가!!")}}
            >
                <AntDesign name="plus" size={50} color="ivory"/>     
            </TouchableOpacity>
        </View>
    </View>
    );
  }