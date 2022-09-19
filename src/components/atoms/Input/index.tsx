import React, { useState } from 'react'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, useMediaQuery } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface InputProps {
  amount?: string
  onChange?:any
  password?: string
  showPassword?: boolean
  name: string
  type:string
  text?: string
  value: string
  weightRange?: string
  weight?: string
}

export const Input = ({type, text, name, value, onChange}:InputProps) => {

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
     '&:hover':{
      border:'1px solid var(--color-purple-100)',
     },
    borderRadius:'4px',
    height: '56px',
    margin: '16px auto 18px auto',
    width: (isMobile) ? '328px' : '423px',
  }

  const sxOptionsLabel ={
    backgroundColor: (isMobile) ? 'var(--color-primary)' : 'var(--color-white)',
    color:'var(--color-purple-800)',
    fontSize:'var(--font-size-xl)',
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
          <InputLabel sx={sxOptionsLabel}>{text}</InputLabel>
          <OutlinedInput
            type={values.showPassword ? 'text' : 'password'}
            name={name}
            value={value}
            onChange={onChange}
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
      <InputLabel sx={sxOptionsLabel}>{text ? (text) : (type)}</InputLabel>
      <OutlinedInput
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            label={text ? (text) : (type)}
        />
    </FormControl>
  )
}
