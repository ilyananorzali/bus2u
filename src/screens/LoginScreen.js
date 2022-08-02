import React, {  useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Icon, Button, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Pressable, TextInput, ScrollView, Alert, Keyboard, TouchableWithoutFeedback, ActivityIndicator } from "react-native"

import { useForm, Controller } from "react-hook-form";

import SizedBox from './components/SizedBox';

import { selectUser } from './slices/userSlice';
import { signInWithEmailAndPassword, clearState } from './slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';





const LoginScreen = (props) => {
  // Navigation hook
  

  // Dispatch hook
  const dispatch = useDispatch()
 
// useSelector hook
 const {isFetching, isSuccess, isError, errorMessage} = useSelector(selectUser)

  const handlePress2 = () => {
    props.navigation.navigate('Signup')
  }
  const emailInput = useRef(null)
  const passwordInput = useRef(null)

  const {control, handleSubmit, formState: {errors}} = useForm ({
      defaultValues: {
        email: '',
        password: '',
      }
  }) 

  const onSubmit = handleSubmit(({email, password}) => {
      const data = {email, password};
      dispatch(signInWithEmailAndPassword(data))
  })

  

  useEffect(() => {
    if(isError) {
      
      dispatch(clearState());
    }
    if(isSuccess) {
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
      <View style={styles.container}>
      <Image style={styles.logostyle} source={require('../../assets/B2.png')} />
      </View>



      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}
        >

          <Text style={styles.title}>Welcome back!</Text>
          <SizedBox height={8} />

          <Text style={styles.subtitle}>Log in to your account</Text>
          <SizedBox height={32} />
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
              onSubmitEditing={() => emailInput.current?.focus()}
              returnKeyType="next"
              style={styles.textInput}
              textContentType="emailAddress"
              value={value}
            />
            )}
            rules={{required: true}}
            />
            
          </View>
          <Text style = {{color: "red"}}>{errors.email?.type === 'required' && '*Email is required'}</Text>


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
                  onSubmitEditing={onSubmit}
                  ref={passwordInput}
                  returnKeyType="done"
                  style={styles.textInput}
                  textContentType="password"
                  value={value}
                />
                )}
                rules={{required: true}}
                />
            </View>
          </Pressable>
          <Text style = {{color: "red"}}>{errors.password?.type === 'required' && '*Password is required'}</Text>

          <SizedBox height={1} />

          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.textButton}>Forgot password?</Text>
          </View>

          <SizedBox height={32} />

                  {isFetching ? (
                    <ActivityIndicator size="large" /> 
                  ) : (
                    <>
                    <TouchableOpacity onPress={onSubmit} >
                    <View style={styles.button}>
                      <Text style={styles.buttonTitle}>Continue</Text>
                    </View>
                  </TouchableOpacity>
                  <SizedBox height={10} />
        
                  <TouchableOpacity onPress={() => handlePress2()}>
                    <View style={styles.button}>
                      <Text style={styles.buttonTitle}>Register New Account</Text>
                    </View>
                  </TouchableOpacity>
                  </>
                  )}
         
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
    </TouchableWithoutFeedback>




    //     <View style={styles.backgroundstyle}>
    //       <View  style= {styles.circle1}/>
    //       <Image style={styles.logostyle} source={require('../../assets/logo.png')} />
    //       <View style={styles.box} >
    //         <InputUser styles={styles.containerStyle} 
    //         leftIcon = {
    //         <MaterialCommunityIcons
    //         name="email-outline" 
    //         size={18} 
    //         color='#394A48' /> 
    //       } 
    //         label="Email" 
    //         placeholder="email@address.com"      
    //         labelStyle = {{
    //           color: "#394A48"
    //         }}
    //         />
    //         <InputUser styles={styles.containerStyle} 
    //         leftIcon={
    //           <MaterialIcons
    //           name="lock-outline" 
    //           size={18} 
    //           color='#394A48' /> 
    //         }     
    //         label="Password"     
    //         placeholder= "password"     
    //         labelStyle = {{
    //           color: "#394A48"
    //         }}         />
    // <TouchableOpacity  style={styles.ButtonContainer}>
    //    <Text style= {styles.ButtonText} >LOG IN</Text> 
    //   </TouchableOpacity>
    //       </View>
    //      </View>
  )
}

const styles = StyleSheet.create({
  // circle1 : {
  //     position: 'absolute',
  //     width: 400,
  //     height: 370,
  //     borderRadius: 200,
  //     left: -150,
  //     top: -100,
  //     backgroundColor: "#47DECC",

  //   backgroundstyle: {
  //     backgroundColor: "#C3FFF8",
  //     flex: 1

  //   },
  //   box: {
  //     backgroundColor: "#47DECC",
  //     position: 'absolute',
  //     marginTop: 270,
  //     marginLeft: 30,
  //     width: 350,
  //     height: 300,
  //     borderRadius: 10,
  //     padding: 20,
  //     shadowColor: "#000",
  // shadowOffset: {
  // 	width: 0,
  // 	height: 3,
  // },
  // shadowOpacity: 0.29,
  // shadowRadius: 4.65,

  // elevation: 7,

  //   },
  //   logostyle: {
  //     width: 150,
  //     height: 100,
  //     margin: 130
  //   },
  //   ButtonContainer: {
  //     elevation: 8,
  //     backgroundColor: "#C3FFF8",
  //     borderRadius: 10,
  //     paddingVertical: 10,
  //     paddingHorizontal: 12,
  //     shadowColor: "#000",
  // shadowOffset: {
  // 	width: 0,
  // 	height: 2,
  // },
  // shadowOpacity: 0.23,
  // shadowRadius: 2.62,

  // elevation: 4,
  //   },
  //   ButtonText: {
  //     fontSize: 14,
  //     color: "#394A48",
  //     fontWeight: "bold",
  //     alignSelf: "center",
  //     textTransform: "uppercase"
  //   }

  // })
  container: {

    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    flex: 1,
    marginTop: 70,
    marginBottom: 40
    // height: '100%'

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
  },
})

export default LoginScreen;