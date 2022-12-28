import React from "react";
import react, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import FeedItem from "./FeedItem";
import Switch from "./Switch";


export default function MyFeedScreen(
    {
        lat,
        long,
        user,
        userMemo,
        setReload,
        reload
    }
) {
    const [mode, setMode] = useState(0);

    return (
        <View style={Feedstyles.container}>
            <View style={{
                width: 300,
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 15
            }}>
            <Switch
                selectionMode={mode}
                option1={"public"}
                option2={"private"}
                onSelectMode={setMode}
                selectionColor={"black"}
            />
            </View>
            <ScrollView style={Feedstyles.FeedList}>
                {userMemo.map((content, i) => {
                    if(content.memo_type == mode) {
                    return (
                        <View key={i}>
                        <FeedItem user={user} writer_id={content.user_id} type={content.memo_type} text={content.memo_content} memo_id={content.id}
                                setReload={setReload} reload={reload}
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