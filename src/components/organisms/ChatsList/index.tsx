import React, { useState } from 'react'
import { Grid, List, ListItem, useMediaQuery } from '@mui/material'
import { SearchInput } from 'src/components/atoms'
import { ChatButton, UserBar } from 'src/components/molecules'

interface ChatListProps {
  onClick?:() => void
  takeDataContact:any
  SetOpenChat:any
}

const arrContacts = [
  {
    key:0,
    value:0,
    isGroup:false,
    isUndefined:false,
    nameContact:'Luz Usuga',
    text:'message',
  },
  {
    key:1,
    value:1,
    isGroup:false,
    isUndefined:false,
    nameContact:'Andres Ramos',
    text:'message',
  }
]

export const ChatsList = ({onClick, takeDataContact, SetOpenChat}:ChatListProps) => {
  const isMobile = useMediaQuery('(max-width:600px)')

  const [dataContact, setDataContact] = useState([])

  const sxOptionList = {
    width: '100%',
    maxWidth: '100%',
    bgcolor: 'var(--color-white)',
    position: 'relative',
    overflow: 'auto',
    maxHeight: !isMobile ? '87vh' : '100vh',
    padding: '0px',
  }

  const sxOptionListItem = {
    width: '102%',
    maxWidth: '100%',
    padding: '0px'
  }

  const listChats = () =>  {
   return arrContacts.map(({...contact}) =>(
      <ListItem key={contact.key} sx={sxOptionListItem} >
        <ChatButton
          {...contact}
          onClick={()=>{
            takeDataContact({...contact})
            SetOpenChat(true)
          }}
        />
      </ListItem>
      )
    )
  }

  return (
    <>
      <Grid item xs={isMobile ? 12 : 4}>
        <UserBar />
        {!isMobile && <SearchInput name='Buscar o empezar nuevo chat' />}
        <List sx={sxOptionList}>
        {listChats()}
        </List>
      </Grid>
    </>
  )
}
