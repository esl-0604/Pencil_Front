import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';


export default function FeedItem (
    {
        user_id,
        type,
        text,
        // memo_loc
    }
) 
{   

    return (
    <View 
        style={{
            marginBottom: 30,
            height: 120,
            justifyContent: "center",
            borderRadius: 25,
            paddingLeft: 10,
            backgroundColor: "lightgray",
        }}
    >
        <TouchableOpacity>
            <Text>{type}</Text>
            <Text>{text}</Text>
            <Text
                style={{
                    paddingTop: 5,
                    color: "gray"
                }}
            >
                {/* {memo_loc} */}
            </Text>
        </TouchableOpacity> 
    </View>
    );
}