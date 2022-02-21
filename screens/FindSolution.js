import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React from 'react'
import FindSolution2 from './FindSolution2';
import Chooseoption from './Chooseoption';
export default function FindSolution({navigation}) {
    const pressHandler= () => {
        navigation.navigate(FindSolution2);
    }
    
     const pressHandler1= () => {
      navigation.navigate(Chooseoption);
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
      'https://adevarul.ro/assets/adevarul.ro/MRImage/2016/11/06/581f284c5ab6550cb841ca5b/1200x630.jpg'
  }}
/>
      <Button
 
 title="PRIMUL AJUTOR ÎN CAZ DE STOP RESPIRATOR"
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
      'https://www.ariniformareprofesionala.ro/images/PrimAjutor/First-Aid-1.jpg'
  }}
/>


<Button
 
 title="PRIMUL AJUTOR ÎN CAZ DE STOP CARDIO-RESPIRATOR "
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXD_U51Ee9tMHmIJshqMHlZw7QvxkbS31pXbpmVPGAufAvMAKO3SzMQuhxjUbhzDM8VQ&usqp=CAU'
  }}
/>

<Button
 
 title="PRIMUL AJUTOR IN CAZ DE CORPI STRAINI IN GAT"
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
      'https://www.timpul.md/uploads/modules/news/2018/06/131647/658x0_20-inec.jpg'
  }}
/>
<Button
 
 title="PRIMUL AJUTOR ÎN CAZ DE ÎNEC"
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
      'https://glasul-hd.ro/wp-content/uploads/2019/07/ASHI-Bloodborne-Pathogens-page-image.jpg'
  }}
/>

<Button
 
 title="ÎNGRIJIREA UNEI VICTIME CU HEMORAGIE EXTERNA MASIVA DINTR-O PLAGA"
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
      'https://i.medicineherbalist.com/images/559257/image.jpg'
  }}
/>

<Button
 
 title=" ARSURI ALE PIELII ÎN URMA EXPUNERII LA O SURSA DE CALDURA"
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
      'https://www.bebebliss.ro/wp/wp-content/uploads/2021/02/large_nume_sfant_prim-ajutor-in-cazul-in-care-copilul-sa-electrocutat-365.jpg'
  }}
/>

<Button
 
 title="ELECTROCUTAREA"
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
      'https://doc.ro/uploads/2018/04/cum-eviti-insolatia.jpg'
  }}
/>
<Button
 
 title="INSOLATIA "
 color="rgb(168,0,0)"

/>
<View style={styles.fixtoText}>
<Button 
 
 title="<--- "
 color="#00bfff"
 onPress={pressHandler1}
/>

<Button 
 
 title="---> "
 color="#00bfff"
 onPress={pressHandler}
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