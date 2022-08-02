import React from 'react'
import { Keyboard, KeyboardAvoidingView } from 'react-native'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'

const KeyboardWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>

      </ScrollView>


    </KeyboardAvoidingView>
  )
}

export default KeyboardWrapper
