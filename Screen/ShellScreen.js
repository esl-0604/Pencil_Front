import React from "react";
import react, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Header as HeaderRNE, } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tab, TabView, SpeedDial, Button } from '@rneui/themed';
import MapScreen from "./MapScreen";
import FeedScreen from "./FeedScreen";
import MyFeedScreen from "./MyFeedScreen";


export default function Shell() {

    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

    return (
        <SafeAreaProvider
            style={{
                flex: 1,
            }}>
            <HeaderRNE
                backgroundColor="ivory"
                leftComponent = {{
                    icon: 'menu',
                    color: 'black',
                }}
                rightComponent = {{
                    icon: 'face',
                    color: 'black',
                }}
                centerComponent = {{ text: 'Yeonpil' }}
            />
            <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        width: 300,
                        height: 50,
                        backgroundColor: "ivory",
                        border: "solid",
                        borderWidth: 2,
                        borderColor: "black",
                        borderRadius: 20
                    }}>
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    dense
                    indicatorStyle={{
                        backgroundColor: "black",
                        height: 1,
                    }}
                >  
                    <Tab.Item
                        buttonStyle={{
                            
                        }}
                        // title="Map"
                        // titleStyle={{ fontSize: 8, color: "black" }}
                        icon={{ name: 'map', type: 'ionicon', color: 'black', size: 15 }}
                    />
                    <Tab.Item
                        buttonStyle={{
                            backgroundColor: "pink",
                        }}
                        // title="Feed"
                        // titleStyle={{ fontSize: 8, color: "black" }}
                        icon={{ name: 'list', type: 'material', color: 'black', size: 15 }}
                    />
                    <Tab.Item
                        buttonStyle={{
                            backgroundColor: "pink",
                        }}
                        // title="My Feed"
                        // titleStyle={{ fontSize: 8, color: "black" }}
                        icon={{ name: 'lock', type: 'material', color: 'black', size: 15 }}
                    />
                </Tab>
            </View>  
            <TabView 
                value={index} 
                onChange={setIndex} 
                animationType="spring"
                style={{
                    backgroundColor:"ivory"
                }}
            >
                <TabView.Item style={{width: "100%", marginTop: 10}}>
                    <MapScreen></MapScreen>
                </TabView.Item>
                <TabView.Item style={{width: "100%", marginTop: 10}}>
                    <FeedScreen></FeedScreen>
                </TabView.Item>
                <TabView.Item style={{width: "100%", marginTop: 10}}>
                    <MyFeedScreen></MyFeedScreen>
                </TabView.Item>
            </TabView>
            <SpeedDial
                isOpen={open}
                icon={{ name: 'edit', color: 'black' }}
                openIcon={{ name: 'close', color: 'black' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
            >
                <SpeedDial.Action
                icon={{ name: 'add', color: 'black' }}
                title="Add"
                onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                icon={{ name: 'delete', color: 'black' }}
                title="Delete"
                onPress={() => console.log('Delete Something')}
                />
            </SpeedDial>
        </SafeAreaProvider>
    );
}
