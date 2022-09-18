import { Box, Card, Divider, FormControl, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Button, Input, Links, Title } from 'src/components/atoms'

interface FormLoginProps{
  title: string
}

export const Form = ({title}:FormLoginProps) => {

  const isMobile = useMediaQuery('(max-width:600px)');

  const sxOptionsCard ={
    display:'inline-flex',
    height: '387px',
    width: '487px',
  }

  const sxOptionsContainerBox = {
    margin: 'auto'
  }

  const sxOptionsDivider = {
    backgroundColor:'var(--color-purple-500)',
    height:'1px',
    marginTop:'24px',
    opacity:0.32 ,
    width:(isMobile) ? '328px' :'423px'
  }


  const sxOptionsBoxLinks = {
    display:'flex',
    marginTop:'12px',
    justifyContent:'space-between'
  }

  if(isMobile){
    return(
      <Box>
        <Title
          color='var(--color-purple-800)'
          fontsize='var(--font-size-5xl)'
          fontweight={500}
          title='Bienvenido'
          variant='h1'
        />
        <FormControl>
          <Input type='text' name='Usuario' />
          <Input type='password' name='Contraseña' />
          <Button
            text='Iniciar Sesion'
            onClick={()=>{console.log('log')}}
          ></Button>
        </FormControl>
        <Divider sx={sxOptionsDivider} />
        <Box sx={sxOptionsBoxLinks}>
          <Links text='Recuperar contraseña' />
          <Links text='No tengo cuenta' />
        </Box>
      </Box>
    )
  }


  return (
    <Card sx={sxOptionsCard}>
      <Box sx={sxOptionsContainerBox}>
        <Title
          color='var(--color-purple-800)'
          fontsize='var(--font-size-5xl)'
          fontweight={500}
          title='Bienvenido'
          variant='h1'
        />
        <FormControl>
          <Input type='text' name='Usuario' />
          <Input type='password' name='Contraseña' />
          <Button
            text='login'
            onClick={() => {console.log('te Logueaste') }}
          />
        </FormControl>
        <Divider sx={sxOptionsDivider}/>
        <Box sx={sxOptionsBoxLinks}>
          <Links text='Recuperar contraseña' />
          <Links text='No tengo cuenta' />
        </Box>
      </Box>
    </Card>
  )
}
