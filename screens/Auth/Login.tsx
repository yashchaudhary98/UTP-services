import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity 
} from 'react-native'
import {UserSquare, Lock1} from 'iconsax-react-native'

export default function Login() {
    const mainImage = require('../../Src/assets/Images/login-img.png')
  return (
      <SafeAreaView>
        <ScrollView>
        <View style={styles.container}>
          <Image
          source={mainImage}
          style={styles.bgImage}/>
          <View style={styles.inputSection}>
          <UserSquare size="32" color="#000" variant='Outline' style={styles.inputImage}/>
          <TextInput
          editable
          style= {styles.mail}
          placeholder='Email Address'></TextInput></View>
          <View style={styles.inputSection}>
          <Lock1 size="32" color="#000" variant="Outline" style={styles.inputImage}/>
          <TextInput
          style={styles.pass}
          placeholder='Password'></TextInput>
        </View>
        <TouchableOpacity>
        <Text style={styles.changePass}>Change Password?</Text>
        </TouchableOpacity>
        <View style= {styles.SubmitBtn}>
          <TouchableOpacity><Text style={styles.btn}>Submit</Text></TouchableOpacity>
        </View>
        </View>
        </ScrollView>
      </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
    mail: {
      flex: 1,
      padding: 2,
      margin: 12,
      height: 35
    },
  
    pass: {
      flex: 1,
      margin: 12,
      height: 35,
      padding: 2,
    },
  
    SubmitBtn: {
      backgroundColor: '#24A0ED',
      height: 44,
      margin: 12,
      borderRadius: 5,
      padding: 4,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    btn: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 18
    },
  
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 12,
      height: 700,
    },
  
    inputSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      borderRadius: 5,
      margin: 12,
    },
  
    inputImage: {
      padding: 10,
      height: 32,
      width: 32,
      resizeMode: 'stretch',
      alignItems: 'center',
      marginLeft: 8,
  
    },
  
    bgImage: {
      width: 300,
      height: 300,
  
    },
  
    changePass: {
      textDecorationLine: 'underline', 
      fontSize: 16, 
      margin: 8,
    }
  })