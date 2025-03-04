import { Pressable, SafeAreaView, Text } from 'react-native'
import React from 'react'

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
    title : string;
    size? : ButtonSize;
}

const sizeStyle : Record<ButtonSize, {height : number; padding : number; fontSize : number}> = {
    sm : {height : 30, fontSize : 14, padding: 12},
    md : {height : 44, fontSize : 16, padding: 16},
    lg : {height : 55, fontSize : 18, padding: 20},
}

const Button = ({title, size='md'}:ButtonProps) => {
  return (
      <Pressable style={[
          {
              height : sizeStyle[size].height,
              borderRadius : 10,
              alignItems : 'center',
              justifyContent : 'center',
              paddingHorizontal : sizeStyle[size].padding,
              backgroundColor : '#000',
          }
      ]}>
        <Text style={[
          {
            fontSize : sizeStyle[size].fontSize,
            color: "white"
          }
          ]}>{title}</Text>
    </Pressable>
  )
}

export default Button