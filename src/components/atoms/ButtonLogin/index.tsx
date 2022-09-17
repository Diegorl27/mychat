import React from 'react'
import { Button } from '../Button'

interface ButtonLoginPropos {
  onClick:()=>void
}

export const ButtonLogin = ({ onClick }:ButtonLoginPropos) => {
  return (
    <Button
      onClick={onClick}
      text='Iniciar sesion'
    />
  )
}
