import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React from 'react'
import FindSolution from './FindSolution';

export default function FindSolution2({navigation}) {

    const pressHandler1= () => {
        navigation.navigate(FindSolution);
    }
    
    
  return (
    <View>
<Text></Text>
<Image
  style={{
    width: 100,
    height: 50,
    resizeMode: 'stretch'
    
    }}
  source={{
    uri:
      'https://www.aflacum.ro/images/photo_galleries/medium/20458/primul-ajutor.jpg'
  }}
/>
      <Button
 
 title="PRIMUL AJUTOR ÎN PLAGI "
 color="rgb(168,0,0)"

/>

<Image
  style={{
    width: 100,
    height: 50,
    resizeMode: 'stretch'
    
    }}
  source={{
    uri:
     'https://www.csid.ro/wp-content/uploads/2020/01/18698634/1-entorsa-masuri-de-prim-ajutor.jpg'
  }}
/>
<Button
 
 title="FRACTURI SI/SAU ENTORSE"
 color="rgb(168,0,0)"

/>

<Image
  style={{
    width: 100,
    height: 50,
    resizeMode: 'stretch'
    
    }}
  source={{
    uri:
      'https://www.bzi.ro/wp-content/uploads/2020/12/femeie-greata-intoxicatie-alimentara.jpg'
  }}
/>

<Button
 
 title="INTOXICATIILE"
 color="rgb(168,0,0)"

/>
<View style={styles.fixtoText}>
<Button 
 
 title="<--- "
 color="#00bfff"
 onPress={pressHandler1}
/>


</View>
    </View>
  )
}

const styles = StyleSheet.create({
    fixtoText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       
    
    },
    
  });