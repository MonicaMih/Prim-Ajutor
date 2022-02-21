import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import { NavigationContainer } from '@react-navigation/native';
import Chooseoption from './Chooseoption';
import GeneralInformation2 from './GeneralInformation2';


export default function GeneralInformation({navigation}) {


  const pressHandler= () => {
    navigation.navigate(GeneralInformation2);
}

 const pressHandler1= () => {
  navigation.navigate(Chooseoption);
}
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
      'http://oammr-arges.ro/wp-content/uploads/2019/07/51845.png'
  }}
/>
      <Title text= "Cu aplicatia noastra de Prim Ajutor vei fi intotdeauna pregatit in situatia unei urgente medicale!"/>
      
      
      <Text style={styles.ftitle} >
       Viata unei persoane accidentate depinde, intr-o mare masura, de momentul acordarii primului ajutor si de priceperea celui care intervine primul la locul accidentului.
       Din pacate, multi oameni mor zilnic in Romania din cauza unor incidente in care acordarea primului ajutor, pana la sosirea ambulantei, ar fi putut salva vieti. {'\n'}
       {'\n'}
       Aplicatia Primele 5 secunde, ofera gratuit sfaturi simple, usor de pus in aplicare de catre orice persoana, indiferent de varsta sau de competente. Pe langa asta, ofera si suportul unor medici
       competenti care sa le vina imediat in ajutor. {'\n'}
       {'\n'}
       Prin intermediul acestei aplicatii, se faciliteaza accesul la informatiile necesare acordarii primului ajutor 
       de baza care pot salva o viata sau pot ameliora suferinta victimei pana la sosirea ambulantei.
      </Text>

    <Button
 
        title="->"
        color="	rgb(168,0,0)"
        onPress={pressHandler}
     />

     <Button
 
      title="<-"
      color="#000000"
      onPress={pressHandler1}
    />

    </View>
  )
}
const styles = StyleSheet.create({
    ftitle: {
      color: '#b22222',
    //  fontWeight: 'bold',
      fontSize: 15,
      textAlign: "auto",
      fontFamily:  'sans-serif-medium',
      fontStyle: 'italic',
      
    }
  });
  