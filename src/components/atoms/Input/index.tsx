import React, { useState } from 'react'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, useMediaQuery } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface InputProps {
  amount?: string
  password?: string
  showPassword?: boolean
  type:string
  name?: string
  weightRange?: string
  weight?: string
}

export const Input = ({type, name}:InputProps) => {

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const isMobile = useMediaQuery('(max-width:600px)')

  const sxOptionsContainer = {
    border: (isMobile) ? '1px solid var(--color-purple-400)' :'1px solid var(--color-purple-300)',
     '&hover':{
      border:'1px solid var(--color-purple-100)',
     },
    borderRadius:'4px',
    height: '56px',
    opacity: 0.23,
    m: 1,
    width: (isMobile) ? '328px' : '423px',
  }

  const sxOptionsLabel ={
    fontSize:'var(--font-size-xl)',
  }

  const handleChange =
    (prop: keyof InputProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  if(type === 'password') {
    return(
      <FormControl sx={sxOptionsContainer} variant="outlined">
          <InputLabel sx={sxOptionsLabel}>Contraseña</InputLabel>
          <OutlinedInput
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
    )
  }

  return (
    <FormControl sx={sxOptionsContainer} variant="outlined">
      <InputLabel sx={sxOptionsLabel}>{name ? (name) : (type)}</InputLabel>
      <OutlinedInput
            sx={sxOptionsLabel}
            type={type}
            label={name ? (name) : (type)}
        />
    </FormControl>
  )
}
