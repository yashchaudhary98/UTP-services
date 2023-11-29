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