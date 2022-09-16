import Image from 'next/image'
import React from 'react'
import image from 'src/assets/images/chat-image.svg'
import useMediaQuery from '@mui/material/useMediaQuery';

export const ChatImage = () => {

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Image height={isMobile ? '120px' : '250px'} width={isMobile ? '120px' : '250px'} src={image} alt='ChatImage' />

  )
}
