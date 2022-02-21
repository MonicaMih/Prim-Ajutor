import { View, Text, Button, Image } from 'react-native'
import React from 'react'

export default function Doctors() {
  return (
    <View>
        <Image
  style={{
    width: 250,
    height: 200,
    resizeMode: 'stretch'
    
    }}
  source={{
    uri:
      'https://www.medestar.com/wp-content/uploads/2020/04/bigstock-Doctors-Set-Medical-Staff-Tea-306687709.jpg'
  }}
/>
        <Text>
         Dr. Popescu Ion, medic primar ortoped, doctor în medicină  
        </Text>
      <Button
          title="Popescu Ion"
          color="rgb(168,0,0)"
      />

      
    </View>
  )
}