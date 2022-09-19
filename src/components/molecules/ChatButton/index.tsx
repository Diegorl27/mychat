import { Card } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Avataricon, Text, Title } from 'src/components/atoms'

interface ChatButtonProps {
  nameContact: string
  isGroup: boolean
  isUndefined: boolean
  onClick: () => void
  text: string
  value:number
  key:number
}

export const ChatButton = ({
  nameContact,
  isGroup=false,
  isUndefined=false,
  onClick,
  text='No hay texto',
  value,
  key
}:ChatButtonProps) => {

  const sxOptions = {
    border: '0px',
    borderColor: 'var(--color-white)',
    borderRadius: '0px',
    display: 'flex',
    height: '60px',
    '&:hover':{
      backgroundColor:'var(--color-purple-50)',
      transition: '1s'
    },
    justifyContent:'space-between',
    width: '100%',
  }

  const sxOptionsBoxCont1 = {
    display:'flex',
    margin:'10px'
  }

  return (
    <Card onClick={onClick} key={key} sx={sxOptions}>
      <Box sx={sxOptionsBoxCont1}>
        <Avataricon
          name={nameContact ? nameContact : '3121312312'}
          isUndefined={nameContact ? isUndefined : isUndefined=true}
          isGroup={isGroup}
          margin='0px 8px 0px 0px'
          value={value}
        />
        <Box>
          <Title
            color='var(--color-purple-900)'
            title={nameContact ? nameContact : 'No se recibe nombre'}
            fontsize='var(--font-size-md)'
            fontweight={500}
            variant='h6'
          />
          <Text
            color='var(--color-purple-400)'
            fontsize='var(--font-size-sm)'
            fontweight={400}
            text={text}
          />
        </Box>
      </Box>
      <Box sx={sxOptionsBoxCont1}>
        <Text
          color='var(--color-purple-400)'
          fontsize='var(--font-size-md)'
          fontweight={400}
          text='16:38PM'
        />
      </Box>
    </Card>
  )
}
