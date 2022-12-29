import React, {useState} from 'react';
import { useEffect } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default function Switch (
    {
        selectionMode,
        option1,
        option2,
        onSelectMode,
        selectionColor
    }
) 
{
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updatedSwitchData = (val) => {
    setSelectionMode(val);
    onSelectMode(val);
  };

  useEffect(()=>{
    setSelectionMode(selectionMode);
  },[selectionMode])

  return (
      <View
        style={{
          height: 25,
          width: 90,
          backgroundColor: 'white',
          borderRadius: 25,
          borderWidth: 1,
          borderColor: selectionColor,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(0)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 0 ? selectionColor : 'white',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 0 ? 'white' : selectionColor,
              fontSize: 10
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? selectionColor : 'white',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 1 ? 'white' : selectionColor,
              fontSize: 10
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
    </View>
  );
}