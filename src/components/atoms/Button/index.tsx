import React from 'react'
import {Button as Btn } from '@mui/material';

interface ButtonProps {
  backgroundColor : string
  color? : string
  fontSize? : string
  fontWeight? : number
  text: string
  onClick: () => void
}

export const Button = (props:ButtonProps):React.ReactElement => {
  const {
    backgroundColor,
    color='var(--color-white)',
    fontSize='var(--font-size-md)',
    fontWeight= 400,
    text,
    onClick
  } = props

  return (
    <Btn sx={{ backgroundColor, color, fontSize, fontWeight, ...props }} onClick={ onClick } >{text}</Btn>
  )
}
