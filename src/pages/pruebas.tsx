import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { SearchInput } from 'src/components/atoms'
import { MessageList, UserBar } from 'src/components/molecules'

export default function Pruebas() {
  const isMobile = useMediaQuery('(max-width:600px)')
  return (
    <Box>
      <UserBar />
      {!isMobile && <SearchInput name='Buscar o empezar nuevo chat' />}
    </Box>
  )
}
