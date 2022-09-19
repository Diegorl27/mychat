import { Box } from '@mui/system'
import React from 'react'

interface BoxMessageProps{
  children:any
  backgroundColor:string
  color:string
}

export const BoxMessage = ({children,backgroundColor,color}:BoxMessageProps) => {

  const sxOptions = {
    display:'flex',
    color:color,
    justifyContent: 'space-between',
    width: '85%',
    minHeight:'70px',
    maxHeight:'100px',
    borderRadius:'12px',
    backgroundColor:backgroundColor
  }

  return (
    <Box sx={sxOptions}>
      {children}
    </Box>
  )
}
