import React from 'react'
import { View, Text, TextInput } from 'react-native'

import { Input } from 'react-native-elements';


const InputUser = (props) => {
  return (
    <View>
      
      <Input 
        
        label={props.label}
        placeholder={props.placeholder}
        containerStyle={props.styles}
        labelStyle = {props.styles}
        leftIcon ={props.leftIcon}
        labelStyle={props.labelStyle}
       
      />
    </View>
  )
}


export default InputUser;