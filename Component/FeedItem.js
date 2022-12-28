import React from 'react';
import {Text, View, TouchableOpacity, Pressable} from 'react-native';


export default function FeedItem (
    {
        user,
        writer_id,
        type,
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
            })
            .catch( (e) => console.log(e) );
        }
    }
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
        <TouchableOpacity>
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
            <Pressable
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
            </Pressable>
            </View>
        </TouchableOpacity> 
    </View>
    );
}