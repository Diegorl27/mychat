import { Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react'
import { ChatImage, Text, Title } from 'src/components/atoms';

interface LogoMessageProps {
  text: string
  title: string
}

export const LogoMessage = ({ text, title }: LogoMessageProps) => {

  const isMobile = useMediaQuery('(max-width:600px)');

  if (isMobile) {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <ChatImage />
      </Box>
    )
  }

  return (
    <Box sx={{ textAlign: 'center' }} >
      <Box sx={{ marginBottom: '16px' }}>
        <ChatImage />
      </Box>
      <Box>
        <Text
          color='var(--color-purple-700)'
          text='Bienvenidos al chat'
          fontsize='var(--font-size-7xl)'
          fontweight={500}
        />

        <Text
          align='center'
          color='var(--color-purple-600)'
          fontsize='var(--font-size-md)'
          fontweight={400}
          text='Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte.' />
      </Box>

    </Box>
  )
}
