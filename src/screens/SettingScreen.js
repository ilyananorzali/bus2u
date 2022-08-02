import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Icon, Button, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Pressable, TextInput, ScrollView, Alert, Keyboard, TouchableWithoutFeedback, ActivityIndicator } from "react-native"

import { useForm, Controller } from "react-hook-form";

import SizedBox from './components/SizedBox';

import { selectUser } from './slices/userSlice';
import { signInWithEmailAndPassword, clearState } from './slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Textarea from 'react-native-textarea';





const SettingScreen = (props) => {
  // Navigation hook


  // Dispatch hook
  const dispatch = useDispatch()

  // useSelector hook
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(selectUser)

  const handlePress2 = () => {
    props.navigation.navigate('Signup')
  }
  const emailInput = useRef(null)
  const passwordInput = useRef(null)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const onSubmit = handleSubmit(({ email, password }) => {
    const data = { email, password };
    dispatch(signInWithEmailAndPassword(data))
  })



  useEffect(() => {
    if (isError) {
      Alert.alert(`${errorMessage}`)
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
      // navigation.navigate('Home');
    }
  }, [isError, isSuccess])


  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    }
  }

  console.log('errors', errors);


  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.root}>






        <SafeAreaView style={styles.safeAreaView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.content}
          >

            <Text style={styles.title}>About BUS2U</Text>
            <SizedBox height={8} />

            <Text style={styles.subtitle}>Version 1.0.0</Text>

<View style = {styles.card}>
            <Text style={{fontSize: 14, color: "#394A48", }}>
              The BUS2U project integrates the capability of a user's smartphone with the help of  cloud  computing  to  construct  an Internet  of  Things  (IoT) system  that  provides transportation system certainty. The BUS2U project makes use of a very efficient and powerful IoT prototyping platform which is NodeMCU ESP8266 development board, an  open-source  electronics  platform  based  on  easy-to-use  hardware  and  software. Other  modules  such  as Global  Positioning  System  (GPS),  and  other  sensors  are integrated  on  the  board  in  order  to  produce  a  more  usable  and  reliable  end-product. </Text>
            <SizedBox height={32} />


            </View>

            <SizedBox height={32} />

            {isFetching ? (
              <ActivityIndicator size="large" />
            ) : (
              <>
               
                <SizedBox height={10} />

                <TouchableOpacity onPress={() => handlePress2()}>
                  <View style={styles.button}>
                    <Text style={styles.buttonTitle}>Back to Home</Text>

                  </View>
                </TouchableOpacity>
              </>
            )}

          </KeyboardAvoidingView>

        </SafeAreaView>

      </ScrollView>
    </TouchableWithoutFeedback>





  )
}

const styles = StyleSheet.create({

  container: {

    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    flex: 1,
    marginTop: 70,
    marginBottom: 40
    // height: '100%'

  },
  card:{
padding: 10,
backgroundColor: "#f5f4f2",
borderRadius: 5,
marginTop: 40
  },

  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
    borderRadius: 5
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',

  },
  logostyle: {

    width: 170,
    height: 50,
    // textAlign: 'center'

  },
  button: {
    alignItems: 'center',
    // backgroundColor: 'rgb(93, 95, 222)',
    backgroundColor: "#2E3035",
    borderRadius: 0,
    height: 48,
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',

  },
  form: {
    alignItems: 'center',
    // backgroundColor: 'rgb(58, 58, 60)',
    backgroundColor: 'white',
    borderRadius: 0,
    flexDirection: 'row',
    height: 100,
    paddingHorizontal: 16,
  },
  label: {
    // color: 'rgba(235, 235, 245, 0.6)',
    color: "#BCABAB",
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    width: 80,
  },
  root: {
    backgroundColor: "#D2DCFF",
    flex: 1,

  },
  safeAreaView: {
    flex: 1,
  },
  subtitle: {
    // color: 'rgba(235, 235, 245, 0.6)',
    color: "#394A48",
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
  },
  textButton: {
    color: "#3742b3",
    fontSize: 12,
    fontWeight: '400',


  },
  textInput: {
    color: "#394A48",
    flex: 1,
  },
  title: {
    color: "#394A48",
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
    paddingTop: 100
  },
})

export default SettingScreen;