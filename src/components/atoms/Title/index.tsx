import { Typography } from '@mui/material'
import React from 'react'

interface TitleProps {
  alignItems?:string
  alignText?:string
  color:string
  margin?: string
  title: string
  fontsize: string
  fontweight: number
  variant:any
}

export const Title = ({
  alignText,
  alignItems,
  color,
  margin,
  title,
  fontsize,
  fontweight,
  variant
}:TitleProps) => {

  const sxOptions ={
    alignText:alignText,
    alignItems:alignItems,
    color: color,
    fontSize: fontsize,
    fontWeight: fontweight,
    margin: margin,
    display:'flex'
  }

  return (
    <Typography sx={sxOptions} variant={variant}>
        {title}
    </Typography>
  )
}
