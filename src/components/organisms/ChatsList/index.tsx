import React, { useState } from 'react'
import { Grid, List, ListItem, useMediaQuery } from '@mui/material'
import { SearchInput } from 'src/components/atoms'
import { ChatButton, UserBar } from 'src/components/molecules'
import { arrContacts } from 'src/interfaces'

interface ChatListProps {
  onClick?:() => void
  takeDataContact:(contacts:arrContacts) => void
  SetOpenChat:(open:boolean) => void
}

const arrContacts = [
  {
    key:0,
    value:0,
    isGroup:false,
    isUndefined:false,
    nameContact:'Luz Usuga',
    text:'loreLorem ipsum dolor sit amet, conse.'

  },
  {
    key:1,
    value:1,
    isGroup:false,
    isUndefined:false,
    nameContact:'Santiago Lopez',
    text:'Lorem ipsum dolor sit amet, conse.',
  },
  {
    key:2,
    value:2,
    isGroup:false,
    isUndefined:false,
    nameContact:'Pool Dead',
    text:'Lorem ipsum dolor sit amet, conse.',
  },
  {
    key:3,
    value:3,
    isGroup:false,
    isUndefined:false,
    nameContact:'Andres Ramos',
    text:'Lorem ipsum dolor sit amet, conse.',
  },
  {
    key:4,
    value:4,
    isGroup:true,
    isUndefined:false,
    nameContact:'Grupo de oracion',
    text:'Lorem ipsum dolor sit amet, conse.',
  },
  {
    key:5,
    value:5,
    isGroup:false,
    isUndefined:true,
    nameContact:'13123444444',
    text:'Lorem ipsum dolor sit amet, conse.',
  },
  {
    key:6,
    value:6,
    isGroup:true,
    isUndefined:false,
    nameContact:'Grupo trabajo',
    text:'Lorem ipsum dolor sit amet, conse.',
  },
]

export const ChatsList = ({onClick, takeDataContact, SetOpenChat}:ChatListProps) => {
  const isMobile = useMediaQuery('(max-width:600px)')

  const [dataContact, setDataContact] = useState([])

  const sxOptionList = {
    width: '100%',
    maxWidth: '100%',
    bgcolor: 'var(--color-white)',
    position: 'relative',
    bottom:0,
    overflow: 'auto',
    maxHeight: !isMobile ? '100%' : '100vh',
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
