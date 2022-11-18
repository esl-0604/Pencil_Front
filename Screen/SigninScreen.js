import React from "react";
import react, { useEffect, useState } from "react";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function SigninScreen() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '28464954985-hi9fkko80eva7kl4mqil9rqom3je8bvf.apps.googleusercontent.com',
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