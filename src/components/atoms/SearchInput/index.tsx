import { FormControl, IconButton, Input, useMediaQuery } from '@mui/material'
import React from 'react'
import { Icons } from '../Icons'

interface SearchInputProps {
  name: string
  onClick?:()=>void
}

export const SearchInput = ({
  name,
  onClick
}:SearchInputProps) => {

  const sxOptionsContainer = {
    justifyContent:'center',
    height: '60px',
    width:'100%'
  }


  return (
    <FormControl sx={sxOptionsContainer} >
      <Input
          type='text'
          placeholder={name}
          startAdornment={
            <IconButton onClick={onClick}>
              <Icons color='var(--color-purple-900)' width='17.49px' height='17.49px' pos={3} key={3} />
            </IconButton>
          }/>

    </FormControl>
  )
}
