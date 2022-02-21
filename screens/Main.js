import { View, Text, Button , Image} from 'react-native'
import React from 'react'
import Layout from './Layout';
import tw from 'tailwind-react-native-classnames';
import Title from '../components/Title';
import Form from '../components/Form';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';

export default function Main({navigation}) {

const pressHandler= () => {
    navigation.navigate(Home);
}

  return (
    <Layout >
    <View style={tw`w-3/4`}>
 <Title text="Primele 5 secunde" />
 <Button
 
  title="Ajuta-ma"
  color="0033FF"
  onPress={pressHandler}
/>
<Image
  style={{
    width: 300,
    height: 150,
    resizeMode: 'contain',
  
  }}
  source={{
    uri:
      'https://exploremag.ro/wp-content/uploads/2018/06/Curs-de-prim-ajutor-pentru-p%C4%83rin%C8%9Bi-Evaluarea-urgen%C8%9Bei-pediatrice.jpg'
  }}
/>
 </View>
 
</Layout>

  )
}