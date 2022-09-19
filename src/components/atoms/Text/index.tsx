import { Typography } from '@mui/material'
import React from 'react'
import style from './Text.module.css'
interface TextProps {
  align?: 'right' | 'left' | 'inherit' | 'center' | 'justify'
  color: string
  fontsize: string
  fontweight: number
  text: string
  textEllipsis?: boolean
}

export const Text = ({
  align,
  color,
  fontweight,
  fontsize,
  text,
  textEllipsis = false
}: TextProps) => {

  const sxOptions = {
    color: (color),
    fontSize: (fontsize),
    fontWeight: (fontweight)
  }

  return (
    <Typography className={textEllipsis ? style['text--ellipsis'] : ''} align={align} sx={sxOptions} variant='body1'>
      {text}
    </Typography>
  )
}
