import { View } from 'react-native';
import React, {useState} from 'react';
import tw from 'tailwind-react-native-classnames'
import FormLabel from './FormLabel'
import FormInput from './FormInput'
import FormButton from './FormButton';
import { useNavigation } from '@react-navigation/native';

const FormInputGroup=({children}) => {
    return(
        <View style={tw `my-3 `}>
    {children}
    </View>
    )
}
export default function Form({ signup, onSubmit}) {
    const navigation = useNavigation(),
    screen= signup ? "Home" : "Register";
    const [email, setemail] =useState(""),
    [password, setpassword]=useState("")
  return (
    <View>
      <FormInputGroup>
          <FormLabel text="Email" />
          <FormInput onChangeText={(text)=>setemail(text)}
             value={email}
            />
      </FormInputGroup>


      <FormInputGroup>
      <FormLabel text ="Password"/>
             <FormInput
              onChangeText={(text)=>setpassword(text)}
             value={password}
             secureTextEntry={true}
            />
         </FormInputGroup>   

         

          

         <FormButton primary={false} text={!signup ? "Login" : "Register"}
         onPress={()=>onSubmit(email,password)}
        
         
         />


         <FormButton primary={true} onPress={()=>navigation.navigate(screen)}
         text={signup ? "Login" : "Register" }
        
         />

         
         
        

        
    </View>
  );
}
