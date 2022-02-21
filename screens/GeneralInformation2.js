import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import { NavigationContainer } from '@react-navigation/native';
import Chooseoption from './Chooseoption';

export default function GeneralInformation2() {
  return (
    <View>
   <Image
  style={{
    width: 350,
    height: 200,
    resizeMode: 'center'
    
    }}
  source={{
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHUcBhkXJLL5SLkoj8mag4bOJZQBW5qhIzw&usqp=CAU'
  }}
/>

         <Title text=" PRINCIPIILE DE BAZĂ ÎN ACORDAREA PRIMULUI AJUTOR"></Title>

         <Text style={{textAlign: 'auto', fontSize:15,  fontWeight: 'bold', color: `#2e8b57`}} >
      În toate cazurile de acordare a primului ajutor, este important să se:
      </Text>


      <Text style={styles.ftitle}>
      
În toate cazurile de acordare a primului ajutor, este important să se: {'\n'}
• asigure locul accidentului;{'\n'}
• ia măsurile de prevenire pentru ca starea de fapt să nu se înrăutătească;{'\n'}
• stabilească contactul cu persoana bolnavă sau accidentată;{'\n'}
• actioneze corespunzător când persoana accidentată sau bolnavă este lipsită de cunoştintă;{'\n'}
•aline durerea; {'\n'}
•stabilească prioritătile.
      </Text>
      
    </View>
  )
}
const styles = StyleSheet.create({
    ftitle: {
      color: '#b22222',
    //  fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'auto',
      fontFamily:  'sans-serif-medium',
      fontStyle: 'italic',
      
      
    }
  });