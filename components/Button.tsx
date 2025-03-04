import { Pressable, Text, ViewStyle, ActivityIndicator } from 'react-native'
import React from 'react'

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "outline" | "ghost" | "destructive";

type ButtonProps = {
    title : string;
    size? : ButtonSize;
    variant? : ButtonVariant;
    loading? : boolean;
}

const sizeStyle : Record<ButtonSize, {height : number; padding : number; fontSize : number}> = {
    sm : {height : 30, fontSize : 14, padding: 12},
    md : {height : 44, fontSize : 16, padding: 16},
    lg : {height : 55, fontSize : 18, padding: 20},
}

const Button = ({title, size='md', variant="primary", loading=false}:ButtonProps) => {

  function getVariantStyle(): ViewStyle {
    switch(variant) {
      case 'primary':
        return {
          backgroundColor: 'black',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: 'gray',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
        };
      case 'destructive':
        return {
          backgroundColor: 'red'
        };
      default:
        return {
          backgroundColor: 'transparent',
        };
    }
  }  

  function getTextColor(): string {
    switch(variant) {
      case 'primary':
      case 'destructive':
        return 'white';
      default:
        return 'black';
    }
  }

  return (
      <Pressable style={[
          getVariantStyle(),
          {
              height : sizeStyle[size].height,
              borderRadius : 10,
              alignItems : 'center',
              justifyContent : 'center',
              paddingHorizontal : sizeStyle[size].padding,
              opacity : loading ? 0.5 : 1, 
          }
      ]}>
        <Text style={[
          {
            fontSize : sizeStyle[size].fontSize,
            color: getTextColor(),  
          }
          ]}>{loading ? <ActivityIndicator/> : title}</Text>
    </Pressable>
  )
}

export default Button