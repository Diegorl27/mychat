import { Box, Button, useMediaQuery } from '@mui/material'
import React from 'react'
import { Avataricon, Icons, Text, Title } from 'src/components/atoms'
import {arrContacts} from 'src/interfaces'

interface ChatBarProps {
  contact: arrContacts
  setOpenChat: (open:boolean) => void
}


export const ChatBar = ({contact, setOpenChat}:ChatBarProps) => {

  const isMobile = useMediaQuery('(max-width:600px)')

  const sxOptionsContainer = {
    backgroundColor:'var(--color-purple-500)',
    display:'flex',
    justifyContent: 'space-between',
    height:'60px',
    width:(isMobile) ? '100%' : '100%'
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
      <Button onClick={()=>{setOpenChat(false)}} sx={sxOptionButtonsIcon}>
        <Icons
          color={!isMobile ? 'var(--color-white)' :'var(--color-purple-50)'}
          height={isMobile ? '24px':'28px'}
          key={0}
          pos={0}
          width={isMobile ? '24px':'28px'}
        />
        </Button>
       <Avataricon
          colorUser='var(--color-purple-50)'
          margin='0px 8px 0px 8px'
          name={contact.nameContact}
          key={0}
        />
        <Box>
          <Title
            color='var(--color-purple-50)'
            fontsize={isMobile ? 'var(--font-size-3xl)' : 'var(--font-size-2xl)'}
            fontweight={500}
            margin='024 0px 28pxx 0px'
            title={contact.nameContact}
            variant='h4'
          />
          <Text
            color='var(--color-white)'
            fontsize={isMobile ? 'var(--font-size-sm)':('--font-size-md')}
            fontweight={400}
            text='últ. vez hoy a la(s) 4:22 p. m.'
          />
        </Box>
      </Box>
      <Box sx={sxOptionsContainerIcons2}>
        <Button sx={sxOptionButtonsIcon}>
          <Icons
            color={!isMobile ? 'var(--color-white)' :'var(--color-purple-50)'}
            height={isMobile ? '24px':'28px'}
            key={3}
            pos={3}
            width={isMobile ? '24px':'28px'}
          />
        </Button>
        <Button sx={sxOptionButtonsIcon}>
          <Icons
            color={!isMobile ? 'var(--color-white)' :'var(--color-purple-50)'}
            height={isMobile ? '24px':'28px'}
            key={2}
            pos={2}
            width={isMobile ? '24px':'28px'}
          />
        </Button>
      </Box>
    </Box>
  )
}