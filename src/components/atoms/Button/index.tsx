import React from 'react'
import {Button as Btn } from '@mui/material';

interface ButtonProps {
  backgroundcolor?: string
  color?: string
  fontsize?: string
  fontweight?: number
  hoverBackground?: string
  height?: string
  onClick?: () => void
  text: string
  width?: string
}

export const Button = ({
  backgroundcolor,
  color,
  fontsize,
  fontweight,
  text,
  hoverBackground,
  height,
  onClick,
  width,
}:ButtonProps):React.ReactElement => {

  const sxOptions = {
    color: color ? color : 'var(--color-white)',
    backgroundColor: backgroundcolor ? backgroundcolor : 'var(--color-purple-700)',
    '&:hover':{
      backgroundColor: hoverBackground ? hoverBackground : 'var(--color-purple-800)',
    fontSize: fontsize ? fontsize : 'var(--font-size-lg)',
    fontWeight: fontweight ? fontweight : 500,
    height: height,
    width: width,
    },
  }

  return (
    <Btn 
      onClick={ onClick }
      sx={sxOptions}
    >
      {text}
    </Btn>
  )
}
