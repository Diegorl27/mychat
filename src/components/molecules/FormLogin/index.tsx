import { Box, Divider, FormControl, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { ButtonLogin, Input } from 'src/components/atoms'

interface FormLoginProps{
  title: string
}

export const FormLogin = ({title}:FormLoginProps) => {

  const isMobile = useMediaQuery('(max-width:600px)');

  const sxOptions = {
    color:'var(--color-purple-800)',
    fontSize: 'var(--font-size-5xl)',
    fontWeight: 500,
  }

  const sxOptionsDivider = {
    backgroundColor:'var(--color-purple-500)',
    height:'1px',
    marginTop:'24px',
    opacity:0.32 ,
    width:(isMobile) ? '328px' :'423px'
  }

  const sxOptionsLinks = {
    color:'var(--color-purple-500)',
    fontSize:(isMobile) ? 'var(--font-size-md)':'var(font-size-16px)',
    textDecoration:'underline',
  }

  const sxOptionsBoxLinks = {
    display:'flex',
    marginTop:'12px',
    justifyContent:'space-between'
  }


  return (
    <Box>
      <Typography sx={sxOptions}>{title}</Typography>
      <FormControl>
        <Input type='text' name='Usuario' />
        <Input type='password' name='Contraseña' />
        <ButtonLogin
          onClick={() => {console.log('te Logueaste') }}
        />
      </FormControl>
      <Divider sx={sxOptionsDivider}/>
      <Box sx={sxOptionsBoxLinks}>
        <Typography sx={sxOptionsLinks}><Link href='/'><a>No tengo una cuenta</a></Link></Typography>
        <Typography sx={sxOptionsLinks}><Link href='/'><a>Recuperar contraseña</a></Link></Typography>
      </Box>
    </Box>
  )
}
