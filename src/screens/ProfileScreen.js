import React from 'react';
import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, Button, TextInput, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import SizedBox from './components/SizedBox';
import { useForm, Controller } from "react-hook-form";
import { Formik } from 'formik'


const ProfileScreen = (props) => {
  const { control, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      username: 'Ilyana Norzali',
      email: 'norilyanazali@gmail.com',
      password: '•••••••••',
      new_password: '',
      password_repeat: ''
    }
  })
  const onSubmit = handleSubmit(({ username, email, password, password_repeat }) => {
    Alert.alert('Data', ` Username: ${username}\nEmail : ${email}\nPassword: ${password}\nRepeat Password ${password_repeat}`)
  })

  return (
<ScrollView style={styles.root}>
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar3.png' }} />
      <View style={styles.body}>
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}
        ></KeyboardAvoidingView>

        <View style={styles.bodyContent}>
          <Text style={styles.name}>Ilyana Norzali</Text>
          <Text style={styles.info}>Cyberjaya</Text>


          <SizedBox height={32} />
          <View style={styles.form}>
            <Text style={styles.label}>Username</Text>
            <Controller
              control={control}
              name="username"
              render={({ field: { onBlur, onChange, value } }) => (
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
              rules={{ required: true }}

            />


          </View>
          <Text style={{ color: "red" }} >{errors.username && '*Username is required'}</Text>


        
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onBlur, onChange, value } }) => (
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
              rules={{ required: true }}

            />

          </View>
          <Text style={{ color: "red" }}>{errors.email && '*Email is required'}</Text>


        

          <View style={styles.form}>
            <Text style={styles.label}>Password</Text>

            <Controller
              control={control}
              name="password"
              render={({ field: { onBlur, onChange, value } }) => (
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
              rules={{ required: true }}

            />

          </View>
          <Text style={{ color: "red" }}>{errors.password && '*Password is required'}</Text>


         


          <View style={styles.form}>
            <Text style={styles.label}>New Password</Text>

            <Controller
              control={control}
              name="new_password"
              render={({ field: { onBlur, onChange, value } }) => (
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
              rules={{ required: true }}

            />

          </View>
          <Text style={{ color: "red" }}>{errors.password && '*Password is required'}</Text>


          
          <View style={styles.form}>
            <Text style={styles.label}>Confirm New Password</Text>

            <Controller
              control={control}
              name="password_repeat"
              render={({ field: { onBlur, onChange, value } }) => (
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
              rules={{ required: true }, {
                validate: value => value === password.current ||
                  "The passwords do not match"
              }}
            />


          </View>
          <Text>{errors.password_repeat && errors.password_repeat.message}</Text>



          <SizedBox height={10} />





          <TouchableOpacity onPress={() => {
            alert('Successfully updated your details!');
          }} style={styles.savebutton}>

            <Text style={styles.buttonTitle} >Save Changes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            props.navigation.navigate("Home");
          }} style={styles.savebutton1}>

            <Text style={styles.buttonTitle} >Back to Home</Text>
          </TouchableOpacity>


        </View>
        </SafeAreaView>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    // backgroundColor: 'rgb(58, 58, 60)',
    backgroundColor: 'white',
    borderRadius: 0,
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
    shadowOffset: {
      width: 0,
      height: 3,

    },
    shadowOpacity: 0.20,
    shadowRadius: 1,
    borderRadius: 3

  },
  label: {
    // color: 'rgba(235, 235, 245, 0.6)',
    color: "#BCABAB",
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    width: 80,
  },
  
  safeAreaView: {
    flex: 1,
  },
  textInput: {
    color: "#394A48",
    flex: 1,
  },
  header: {
    backgroundColor: "#D2DCFF",
    height: 150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 80
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
    justifyContent: 'center',
    marginTop: 20
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    
    alignItems: 'center',
    padding: 30,
    paddingBottom: 120
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  
  savebutton: {
    marginTop: 10,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: "100%",
    borderRadius: 0,
    backgroundColor: "#2E3035",
  },
  savebutton1: {
    marginTop: 0,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    width: "100%",
    borderRadius: 0,
    backgroundColor: "#2E3035",
  },

  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
  },
  container: {
    backgroundColor: "#D2DCFF",
    
  }
})

export default ProfileScreen