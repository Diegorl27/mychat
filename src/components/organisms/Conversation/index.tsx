import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { ChatBar, UserBar } from 'src/components/molecules'

interface ConversationProps {
  setOpenChat: any
  openChat: boolean
  contact:any
  setDataContact: any
}

export const Conversation = ({
  contact,
  openChat,
  setOpenChat,
  setDataContact
}:ConversationProps) => {

  const isMobile = useMediaQuery('(max-width:600px)')
  
  const sxOptions = {
    backgroundColor:'var(--color-purple-50)' ,
    height: '100vh',
  }

return (
  <Grid item xs={12} sx={sxOptions}>
    <ChatBar />
  </Grid>
)

}
