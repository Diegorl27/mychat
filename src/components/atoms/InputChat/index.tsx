import { Box, Input, useMediaQuery } from '@mui/material'
import React from 'react'
import { Icons } from '../Icons'

export const InputChat = () => {

const isMobile = useMediaQuery('(max-width:600px)')

const sxOptions = {
  backgroundColor:(isMobile) ? 'var(--color-white)' : 'var(--color-purple-500)',
  width:isMobile ? '100%' : '-webkit-fill-available',
  height:'60px',
  display:'flex',
  alignText:'center',
  position:'absolute',
  bottom:0
}

const sxOptionsTextField ={
  width:'calc(100% - 78px)',
  height:'30px',
  color:(isMobile) && 'var(--color-black)',
  backgroundColor:'var(--color-white)',
  borderRadius:'24px',
  position:'absolute',
  marginLeft:'10px',
}

const container = {
  justifyContent: 'center',
  margin: 'auto 20px auto 22px',
}



  return (
    <Box sx={sxOptions}>
      <Box sx={container}>
      <Icons color={isMobile ? 'var(--color-black)' : 'var(--color-white)'} height='20' width='20' pos={4} />
      <Input sx={sxOptionsTextField} />
      </Box>
    </Box>
  )
}
