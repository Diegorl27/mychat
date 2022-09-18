import { Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import React from 'react'
interface TextProps {
  color: string
  fontsize: string
  fontweight: number
  text: string
}

export const Text = ({
  color,
  fontweight,
  fontsize,
  text
}:TextProps) => {

  const sxOptions ={
    color:(color),
    fontSize:(fontsize),
    fontWeight:(fontweight)
  }

  return (
    <Typography sx={sxOptions} variant='body1'>
        {text}
    </Typography>
  )
}
