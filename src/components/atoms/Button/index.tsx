import React from 'react'
import {Button as Btn } from '@mui/material';

interface ButtonProps {
  text: string
  onClick: () => void
}

export const Button = (props:ButtonProps):React.ReactElement => {
  const {
    text,
    onClick
  } = props

  const sxOptions = {
    color: 'var(--color-white)',
    fontSize: 'var(--font-size-lg)',
    fontWeight:500,
    backgroundColor:'var(--color-purple-700)',
    '&:hover':{
      backgroundColor: 'var(--color-purple-900)',
    },
  }

  return (
    <Btn sx={sxOptions} onClick={ onClick } >{text}</Btn>
  )
}
