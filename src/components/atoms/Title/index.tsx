import { Typography } from '@mui/material'
import React from 'react'

interface TitleProps {
  color:string
  margin?: string
  title: string
  fontsize: string
  fontweight: number
  variant:any
}

export const Title = ({
  color,
  margin,
  title,
  fontsize,
  fontweight,
  variant
}:TitleProps) => {

  const sxOptions ={
    color: color,
    fontSize: fontsize,
    fontWeight: fontweight,
    margin: margin
  }

  return (
    <Typography sx={sxOptions} variant={variant}>
        {title}
    </Typography>
  )
}
