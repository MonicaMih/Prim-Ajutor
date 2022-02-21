import React from 'react'
import { View,StyleSheet } from 'react-native'


export default function Layout({children}) {
    return (
        
    <View style={styles.container}>
    {children}

    
    </View>
  
  
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: "	rgb(168,0,0)",
      alignItems: "center",
      justifyContent: "center",
       
    
    },
    
  });