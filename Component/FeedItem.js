import React from 'react';
import { useEffect } from 'react';
import {Text, View, TouchableOpacity, Pressable, Alert} from 'react-native';


export default function FeedItem (
    {
        user,
        writer_id,
        type,
        screen,
        text,
        memo_id,
        setReload,
        reload
    }
) 
{   

    const deleteMemo = async() => {
        const memoURL = "http://34.125.39.187.nip.io:8000/memos/";
        // console.log(memo_id);
        // console.log(writer_id);
        // console.log(user.id);
        if(user.id === writer_id){
        
            await fetch(memoURL + memo_id, {
                method : "delete",
            })
            .then( (res) => res.json() )
            .then( (data) => {
                // console.log(data);
                Alert.alert("메모 삭제", "해당 메모를 삭제하였습니다. ");
            })
            .catch( (e) => console.log(e) );
        }
    }

    useEffect(()=>{
        // console.log(screen);
    },[])
    
    return (
    <View 
        style={{
            flex: 1,
            flexDirection: "column", 
            marginBottom: 30,
            height: 120,
            justifyContent: "center",
            borderRadius: 25,
            paddingLeft: 10,
            backgroundColor: "ivory",
            borderColor: "gray",
            borderStyle: "solid",
            borderWidth: 0.5,

        }}
    >
        
            {/* <Text>{type}</Text> */}
            <Text style={{
                marginTop: 30,
                height: 50,
                // backgroundColor: "black"
            }}>{text}</Text>
            <View style={{
                alignSelf: "flex-end",
                marginRight: 10,
                marginBottom: 10
            }}>
            {screen == "MyFeed" ?
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>{
                    deleteMemo();
                    setReload(!reload);
                }}
                style={{
                    width: 50,
                    height: 30,
                    borderRadius: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "lightgray"
                }}
            >
                <Text>삭제</Text>
            </TouchableOpacity>
            : null}
            
            </View>
    </View>
    );
}