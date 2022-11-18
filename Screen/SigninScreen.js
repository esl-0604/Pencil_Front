import React from "react";
import react, { useEffect, useState } from "react";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function SigninScreen() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: "1078582717102-spsicokn72o1jn16u9f0mga28e450h5b.apps.googleusercontent.com",
      });

    useEffect(() => {
    if (response?.type === 'success') {
        const { authentication } = response;
        console.log(authentication);
    }
    }, [response]);
    
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightpink",
        }}>
        <Button
          disabled={!request}
          title="Login"
          onPress={() => {
            promptAsync();
          }}
        />
        </View>
      );
}