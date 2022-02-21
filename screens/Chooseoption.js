import { View, Text, Button } from 'react-native'
import React from 'react'
import Layout from './Layout';
import tw from 'tailwind-react-native-classnames';
import GeneralInformation from './GeneralInformation';
import { NavigationContainer } from '@react-navigation/native';
import FindSolution from './FindSolution';
import Doctors from './Doctors';

export default function Chooseoption({navigation}) {

  const pressHandler1= () => {
    navigation.navigate(GeneralInformation);

  }
    const pressHandler2= () => {
      navigation.navigate(FindSolution);
}
const pressHandler3= () => {
  navigation.navigate(Doctors);
}
  return (
    <Layout >
    <View style={tw`w-3/4`}>
 
 <Button
 
  title="Informatii generale"
  color="0033FF"
  onPress={pressHandler1}
/>
<Button
 
  title="Gaseste solutia"
  color="0033FF"
  onPress={pressHandler2}
/>

<Button
 
  title="Contacteaza un medic"
  color="0033FF"
  onPress={pressHandler3}
/>

 </View>
 
</Layout>
  )
}