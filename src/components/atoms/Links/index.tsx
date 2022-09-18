import { Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react'

interface LinksProps {
  text:string
}

export const Links = ({text}:LinksProps) => {

  const isMobile = useMediaQuery('(max-width:600px)');

  const sxOptions = {
    color:'var(--color-purple-500)',
    fontSize:(isMobile) ? 'var(--font-size-md)':'var(font-size-16px)',
    textDecoration:'underline',
  }

  return (
    <Typography sx={sxOptions}><Link href='/'><a>{text}</a></Link></Typography>
  )
}
