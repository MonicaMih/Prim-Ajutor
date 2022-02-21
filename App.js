//import { StatusBar } from 'expo-status-bar';
import  {useEffect} from 'react';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Register from './screens/Register'
import Main from './screens/Main'


import firebase from 'firebase'
import {config} from './firebaseconfig'
import Chooseoption from './screens/Chooseoption';
import GeneralInformation from './screens/GeneralInformation';
import GeneralInformation2 from './screens/GeneralInformation2';
import FindSolution from './screens/FindSolution';
import FindSolution2 from './screens/FindSolution2';
import Doctors from './screens/Doctors';

const Stack=createNativeStackNavigator();



export default function App() {

  useEffect(() =>
  {
    if(!firebase.apps.length)
    {
      firebase.initializeApp(config)
    }
    else
    firebase.app()
  }, []
  )
  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="Main" screenOptions={{headerShown:false}}
    >
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name="Chooseoption" component={Chooseoption}/>
      <Stack.Screen name="GeneralInformation" component={GeneralInformation}/>
      <Stack.Screen name="GeneralInformation2" component={GeneralInformation2}/>
      <Stack.Screen name="FindSolution" component={FindSolution}/>
      <Stack.Screen name="FindSolution2" component={FindSolution2}/>
      <Stack.Screen name="Doctors" component={Doctors}/>
      
     

</Stack.Navigator>

      </NavigationContainer>
    /*
   <View style={styles.container}>
    <Text>OLA </Text>
    <StatusBar style="auto" />
    </View>*/
  );
}



