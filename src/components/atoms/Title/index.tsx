import { Typography } from '@mui/material'
import React from 'react'

interface TitleProps {
  color:string
  fontsize: string
  fontweight: number
  title: string
  variant:string
}

export const Title = ({
  color,
  title,
  fontsize,
  fontweight,
  variant
}:TitleProps) => {

  const sxOptions ={
    color: (color),
    fontSize: (fontsize),
    fontWeight: (fontweight)
  }

  return (
    <Typography sx={sxOptions} variant={variant}>
        {title}
    </Typography>
  )
}
