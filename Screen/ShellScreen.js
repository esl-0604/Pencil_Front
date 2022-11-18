import React from "react";
import react, { useEffect, useState } from "react";
import { View, Text, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function Shell() {
    return (
        <SafeAreaProvider 
            style={{
                flex: 1
        }}>
            <StatusBar/>
            <HeaderRNE
                leftComponent = {{
                    icon: 'menu',
                    color: '#fff',
                }}
                rightComponent = {{
                    icon: 'menu',
                    color: '#fff',
                }}
                centerComponent = {{ text: 'Header' }}
            />
            <View>
                <Text>asd</Text>
            </View>
        </SafeAreaProvider>
    );
}
