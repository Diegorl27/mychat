import React from 'react'
import { Button } from '../Button'

interface ButtonLoginPropos {
  onClick:()=>void
}

export const ButtonLogin = ({ onClick }:ButtonLoginPropos) => {
  return (
    <Button
      backgroundColor='var(--color-purple-700)'
      color='var(--color-white)'
      fontSize='var(--font-size-lg)'
      fontWeight={500}
      onClick={onClick}
      text='Iniciar sesion'
    />
  )
}
