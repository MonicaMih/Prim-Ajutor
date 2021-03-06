import React from 'react' 
import {TouchableOpacity ,Text} from 'react-native'
//import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps'
import tw from 'tailwind-react-native-classnames'

export default function FormButton(props){
    let{
        text,
        primary,
        ...other
    } =props

    let primaryStyling= tw`bg-blue-500 border-none px-6 py-3 rounded my-3`,
    secondaryStyling= tw`border-blue-500 border bg-transparent px-6 py-3 my-3 rounded`,
    primaryText= tw`text-center text-white font-bold`,
    secondaryText= tw`text-center text-blue-500 font-bold`

    return(
        <TouchableOpacity {...other}>
            <Text style={primary ? primaryText : secondaryText}>{text}</Text>
            </TouchableOpacity>
    )
    } 
