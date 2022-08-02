import 'react-native-gesture-handler';

import React from 'react';
import {  KeyboardAvoidingView, Platform, LogBox } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './store'


import { NavigationContainer } from '@react-navigation/native';



import RootNavigator from './src/screens/navigator/RootNavigator';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';





export default function App() {
  
  LogBox.ignoreAllLogs(); //Ignore all log notifications
 

  return (
    <Provider store={store}>


      <NavigationContainer>
        <SafeAreaProvider>
          
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 1 }}
          >
  
           <RootNavigator />
            

            
          </KeyboardAvoidingView>
        </SafeAreaProvider>

      </NavigationContainer>
    </Provider>

  );
}
    

