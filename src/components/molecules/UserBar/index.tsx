import { Box, Button, useMediaQuery } from '@mui/material'
import React from 'react'
import { Avataricon, Icons, Title } from 'src/components/atoms'


export const UserBar = () => {

  const isMobile = useMediaQuery('(max-width:600px)')

  const sxOptionsContainer = {
    backgroundColor:'var(--color-purple-500)',
    display:'flex',
    justifyContent: 'space-between',
    height:'60px',
    width:(isMobile) ? '360px' : '420px'
  }

  const sxOptionsContainerIcons1 = {
    display:'flex',
    margin:'10px 16px'
  }

  const sxOptionsContainerIcons2 = {
    display:'flex',
  }

  const sxOptionButtonsIcon = {
    '&:hover':{
      backgroundColor:'var(--color-purple-500)'
    },
    minWidth:'40px',
    heigth:'fit-content',
    padding:'0px'
  }

  return (
    <Box sx={sxOptionsContainer}>
      <Box sx={sxOptionsContainerIcons1}>
        <Avataricon
          colorUser='var(--color-purple-50)'
          margin='0px 8px 0px 0px'
          name='Diego Ramirez'
          key={0}
        />
        <Title
          color='var(--color-purple-50)'
          fontsize='var(--font-size-2xl)'
          fontweight={500}
          margin='10px 0px 0px 0px'
          title='Diego Ramirez'
          variant='h4'
        />
      </Box>
      <Box sx={sxOptionsContainerIcons2}>
        <Button sx={sxOptionButtonsIcon}>
          <Icons
            color={isMobile ? 'var(--color-white)' :'var(--color-purple-50)'}
            height={isMobile ? '16px':'18'}
            key={1}
            pos={1}
            width={isMobile ? '16px':'18'}
          />
        </Button>
        <Button sx={sxOptionButtonsIcon}>
          <Icons
            color={isMobile ? 'var(--color-white)' :'var(--color-purple-50)'}
            height={isMobile ? '16px':'18'}
            key={2}
            pos={2}
            width={isMobile ? '16px':'18'}
          />
        </Button>
      </Box>
    </Box>
  )
}
