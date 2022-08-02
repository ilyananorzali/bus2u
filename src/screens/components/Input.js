import React from 'react'
import {View, Text, TextInput} from 'react-native'

export default function Input(props) {
    return (
      <View>
        <TextInput
       
        {...props}
        />
        {props.errorText && (
          <Text>{props.errorText}</Text>
        )}
      </View>
    )
}

