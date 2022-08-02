import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Pressable, TextInput, ScrollView, Keyboard, TouchableWithoutFeedback, Alert, ActivityIndicator } from "react-native"
import SizedBox from './components/SizedBox';
import { useForm, Controller } from "react-hook-form";
import { clearState, createUserWithEmailAndPassword, selectUser } from './slices/userSlice';
import { useNavigation } from '@react-navigation/native';


const SignupScreen = (props) => {
  // Navigation hook
  const navigation = useNavigation()

  // Dispatch hook
  const dispatch = useDispatch()
  const {isFetching, isSuccess, isError, errorMessage} = useSelector(selectUser)
  const {control, handleSubmit, formState: {errors}, watch} = useForm ({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      password_repeat: ''
    }
}) 
console.log(errors)
const password = useRef({});
password.current = watch("password")


const onSubmit = handleSubmit(({username, email, password}) => {
  const data = {username, email, password}
  dispatch(createUserWithEmailAndPassword(data));
 
})

  // For cleanup after exiting this page
  useEffect(() => {
      return () => {
        dispatch(clearState());
      }
  }, [])

  // For loading success and error
  useEffect(() => {
    if(isError) {
      Alert.alert(`${errorMessage}`)
      dispatch(clearState());
    }
    if(isSuccess) {
      dispatch(clearState());
      navigation.navigate('Home');
    }
  }, [isSuccess, isError]);



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        {isFetching ? (<ActivityIndicator size="large" /> ) : null}
        <Image style={styles.logostyle} source={require('../../assets/B2.png')} />
      </View>

      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}
        >

          <Text style={styles.title}>Let's Get Started!</Text>
          <SizedBox height={8} />

          <Text style={styles.subtitle}>Create your account</Text>
          <SizedBox height={32} />

          <View style={styles.form}>
            <Text style={styles.label}>Username</Text>
            <Controller 
            control={control}
            name="username"
            render={({field: {onBlur, onChange, value}}) => (
              <TextInput
              autoCapitalize="none"
              autoCompleteType="username"
              autoCorrect={false}
              keyboardType="default"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              returnKeyType="next"
              style={styles.textInput}
              textContentType="username"
              value={value}
            />

            )}
            rules={{required: true}}
            
            /> 

           
          </View>
          <Text style = {{color: "red"}} >{errors.username && '*Username is required'}</Text>


          <SizedBox height={8} />
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <Controller 
            control={control}
            name="email"
            render={({field: {onBlur, onChange, value}}) => (
              <TextInput
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              returnKeyType="next"
              style={styles.textInput}
              textContentType="emailAddress"
              value={value}
            />

            )}
            rules={{required: true}}
            
            /> 

          </View>
          <Text style = {{color: "red"}}>{errors.email && '*Email is required'}</Text>


          <SizedBox height={8} />



          <Pressable>
            <View style={styles.form}>
              <Text style={styles.label}>Password</Text>

              <Controller 
            control={control}
            name="password"
            render={({field: {onBlur, onChange, value}}) => (
              <TextInput
              autoCapitalize="none"
              secureTextEntry={true}
              autoCompleteType="password"
              autoCorrect={false}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              returnKeyType="next"
              style={styles.textInput}
              textContentType="password"
              value={value}
            />

            )}
            rules={{required: true}}
            
            /> 

            </View>
            <Text style = {{color: "red"}}>{errors.password && '*Password is required'}</Text>
          </Pressable>

          <SizedBox height={8} />
          <View style={styles.form}>
            <Text style={styles.label}>Confirm Password</Text>

            <Controller
                control={control}
                name="password_repeat"
                render={({field: {onBlur, onChange, value}}) => (
                  <TextInput
                  autoCapitalize="none"
                  secureTextEntry={true}
                  autoCompleteType="password"
                  autoCorrect={false}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  onSubmitEditing={onSubmit}
                  returnKeyType="done"
                  style={styles.textInput}
                  textContentType="password"
                  value={value}
                />
                )}
                rules={{required: true}, {
                  validate: value => value === password.current || 
                  "The passwords do not match"
                }}
                />


          </View>
          <Text>{errors.password_repeat && errors.password_repeat.message}</Text>



          <SizedBox height={32} />

                {isFetching ? (
                  <ActivityIndicator size="large" />
                ) : (
                  <TouchableOpacity onPress={onSubmit}>
                  <View style={styles.button}>
                    <Text style={styles.buttonTitle}>Sign Up</Text>
                  </View>
                </TouchableOpacity>
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

  },
  logostyle: {

    width: 170,
    height: 50,
    textAlign: 'center',

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
    height: 48,
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
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    color: "#394A48",
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
  },
})


export default SignupScreen