import React from 'react';
import{
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import UTPStack from './Navigation/BottomTab/UTPStack/UTPStack';
import Login from './screens/Auth/Login';



function App(){

  return (
    <NavigationContainer>
    <UTPStack/>
   </NavigationContainer>

  );
};

const styles = StyleSheet.create({
 
})

export default App;