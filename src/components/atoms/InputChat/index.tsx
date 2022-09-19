import { Box, Input, useMediaQuery } from '@mui/material'
import React from 'react'
import { Icons } from '../Icons'

export const InputChat = () => {

const isMobile = useMediaQuery('(max-width:600px)')

const sxOptions = {
  backgroundColor: 'var(--color-purple-500)',
  width:isMobile ? '100%' : '75%',
  height:'60px',
  display:'flex',
  alignText:'center',
  position:'absolute',
  bottom:0
}

const sxOptionsTextField ={
  width:'70%',
  height: '30px',
  backgroundColor:'var(--color-white)',
  borderRadius:'24px',
  position:'absolute',
  marginLeft:'10px'
}

const container = {
  justifyContent: 'center',
  margin: 'auto 40px auto 40px',
}



  return (
    <Box sx={sxOptions}>
      <Box sx={container}>
      <Icons color='var(--color-white)' height='20' width='20' pos={4} />
      <Input sx={sxOptionsTextField} />
      </Box>
    </Box>
  )
}
