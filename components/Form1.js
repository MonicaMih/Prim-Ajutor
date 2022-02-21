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
export default function Form1({ signup, onSubmit}) {
    const navigation = useNavigation(),
    screen= signup ? "Home" : "Register";
    const [email, setemail] =useState("");
    const [password, setpassword]=useState("");
    const [fname, setFName]=useState("");
    const [lname, setLName]=useState("");
   
  return (
    <View>

<FormInputGroup>
      <FormLabel text ="First Name"/>
             <FormInput
              onChangeText={(text)=>setFName(text)}
             value={fname}
             
            />
         </FormInputGroup>  
         <FormInputGroup>
      <FormLabel text ="Last Name"/>
             <FormInput
              onChangeText={(text)=>setLName(text)}
             value={lname}
             
            />
         </FormInputGroup>  



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