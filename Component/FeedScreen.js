import React from "react";
import react, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import FeedItem from "./FeedItem";



export default function FeedScreen(
    {
        lat,
        long,
        user,
        publicMemo,
        setReload,
        reload
    }
) {
    const my_X = Math.floor(lat * 1000) / 1000;
    const my_Y = Math.floor(long * 1000) / 1000;

    useEffect(()=>{ 
    }, [publicMemo])

    return (
        <View style={Feedstyles.container}>
            <ScrollView style={Feedstyles.FeedList}>
                {publicMemo.map((content, i) => {
                    if(content.memo_type === 0 && my_X === content.memo_x && my_Y === content.memo_y) {
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
        paddingTop: 47,
    }, 
    FeedList: {
        flex: 1,
        width: 300,
    },
    
});