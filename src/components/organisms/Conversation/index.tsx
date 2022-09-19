import React from 'react'
import {Box, Grid, List, ListItem, useMediaQuery } from '@mui/material'
import { InputChat } from 'src/components/atoms'
import { ChatBar, Message} from 'src/components/molecules'

interface ConversationProps {
  setOpenChat: any
  openChat: boolean
  contact: any
  setDataContact: any
}

const messages = [
  {
    key: 0,
    text: 'Lorem ipsum dolor sit amet, conse.',
    name: 'Luz Usuga',
    isUser: false,
    time: '9:48 p. m.'
  },
  {
    key: 0,
    text: 'Lorem ipsum dolorr adipiscing elit. Sed nibh malesuada sit.',
    name: 'Diego Ramirez',
    isUser: true,
    time: '9:48 p. m.'
  },
  {
    key: 0,
    text: 'Lorem ipsum dolor sit amet, consectetur .',
    name: 'Luz Usuga',
    isUser: false,
    time: '9:48 p. m.'
  }
]

export const Conversation = ({
  contact,
  openChat,
  setOpenChat,
  setDataContact
}: ConversationProps) => {

  const isMobile = useMediaQuery('(max-width:600px)')

  const sxOptions = {
    backgroundColor: 'var(--color-purple-50)',
    height: '100vh',
    maxWidth: '100%',
    padding: '0px',
  }

  const sxOptionList = {
    width: '100%',
    overflow: 'auto',
    maxHeight: !isMobile ? '80.8vh' : '100vh',
    padding: '0px',
  }

  const sxOptionListItem = {
    width: '100vh',
    padding: '0px'
  }

  const showMessages = () => {
   return messages.map(({ ...messages }) => (
           <Box  key={messages.key}>
            <Message
            {...messages}
            />
          </Box>
   ))
  }

  return (
    <Grid item xs={12} sx={sxOptions}>
      <ChatBar
        contact={contact}
        setOpenChat={setOpenChat}
      />
      <List sx={sxOptionList}>
        {showMessages()}
      </List>
        <InputChat />

    </Grid>
  )

}
