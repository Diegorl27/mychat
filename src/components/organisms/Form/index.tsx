import { Box, Card, Divider, FormControl, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Input, Links, Title } from 'src/components/atoms'

interface FormLoginProps{
  title: string
  name?: string
  password?: string
}

export const Form = ({title}:FormLoginProps) => {

  const isMobile = useMediaQuery('(max-width:600px)');

  const [dataLogin, setDataLogin] = useState({
    name:'',
    password:'',
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const { name, value } = e.target
    console.log(dataLogin)
    setDataLogin({...dataLogin,[name]:value })
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    if(dataLogin.name === '' && dataLogin.password === ''){
      alert('rellena los campos')
    }else{
      console.log(dataLogin)
    }
  }

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
          <Input
            type='text'
            text='Usuario'
            name='name'
            value='name'
          />
          <Input
            type='password'
            text='Contraseña'
            name='password'
            value='password'
          />
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
        <FormControl onSubmit={handleSubmit}>
            <Input
            onChange={handleChange}
            type='text'
            text='Usuario'
            name='name'
            value={dataLogin.name}
          />
          <Input
            onChange={handleChange}
            type='password'
            text='Contraseña'
            name='password'
            value={dataLogin.password}
          />
          <Link href='/pruebasChat'>
            <Button
              text='Iniciar Sesion'
            />
          </Link>
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
