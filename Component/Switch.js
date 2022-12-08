import React, {useState} from 'react';
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

  return (
      <View
        style={{
          height: 30,
          width: 70,
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
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 2 ? selectionColor : 'white',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 2 ? 'white' : selectionColor,
              fontSize: 10
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
    </View>
  );
}