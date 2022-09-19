import { Box } from '@mui/system'
import React from 'react'
import { Avataricon, BoxMessage, Text } from 'src/components/atoms'

interface MessageProps {
  name: string
  isUser: boolean
  text: string
  time: string
}

export const Message = ({
  isUser,
  name,
  text,
  time
}: MessageProps) => {

  const sxOptions = {
    display: 'flex',
    flexFlow: !isUser && 'row-reverse',
    margin: (isUser) ? '50px 0px 0px 44px' : '50px 64px 0px 0px'
  }
  const sxOptionsText = {
    margin: '10px 50px 5px 20px',
    width: '100%',
    height: 'max-content',
  }
  const sxOptionsTime = {
    margin: 'auto 30px 5px 5px',
    width: '100%',
    height: 'max-content',
  }



  return (
    <Box sx={sxOptions}>
      {isUser && <Avataricon colorUser='var(--color-papper)' margin='10px 10px 0px 0px' name={name} />}
      <BoxMessage
        color={isUser ? 'var(--color-purple-800)' : 'var(--color-white)'}
        backgroundColor={isUser ? 'var(--color-papper)' : 'var(--color-purple-500)'}>
        <Box sx={{flexDirection:'column', width:'100%', padding:'0 15px'}}>
          <Box sx={sxOptionsText}>
            <Text
              color={isUser ? 'var(--color-purple-800)' : 'var(--color-white'}
              fontsize='var(--font-size-md)'
              fontweight={400}
              text={text}
            />
          </Box>
          <Box sx={sxOptionsTime}>
            <Text
              align='right'
              color={isUser ? 'var(--color-purple-800)' : 'var(--color-white'}
              fontsize='var(--font-size-md)'
              fontweight={400}
              text={time}
            />
          </Box>
        </Box>

      </BoxMessage>
    </Box>
  )
}
