import { Box, Grid, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LogoMessage } from 'src/components/molecules'
import { ChatsList, Conversation } from 'src/components/organisms'

const textDefault = 'Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte.'

export default function Home() {
  const isMobile = useMediaQuery('(max-width:600px)')
  const [openChat, setOpenChat] = useState(false)
  const [contact, setDataContact] = useState([])

  const takeDataContact = (data) =>{
    setDataContact(data)
  }

  useEffect(() => {
    if(openChat === false){
      setDataContact([])
    }
  },[openChat])

  const showChatList = () => {
    if(isMobile === true && openChat === false){
      return(
      <ChatsList
        takeDataContact={takeDataContact}
        SetOpenChat={setOpenChat}
        />
      )
    }else if(isMobile === false){
      return(
        <ChatsList
          takeDataContact={takeDataContact}
          SetOpenChat={setOpenChat}
          />
      )
    }
  }

  const showConversation = () => {
    if(openChat === true && isMobile === true) {
      return(
        <Conversation
          contact={contact}
          setDataContact={setDataContact}
          setOpenChat={setOpenChat}
          openChat={openChat}
        />
      )
    }else if(openChat===true){
     return(
      <Conversation
      contact={contact}
      setDataContact={setDataContact}
      setOpenChat={setOpenChat}
      openChat={openChat}
    />
     )
    }
  }

  const showLogo = () =>{
    if(openChat === false && isMobile===false){
      return (<Grid item xs={12} textAlign='center'>
      <Box sx={sxOptionsBoxLogo}>
        <LogoMessage title='Bienvenidos al chat' text={textDefault} />
      </Box>
    </Grid>)
    }
  }


  const sxOptiOptionsContainer =  {
   maxWidth:'100%',
   MaxHeight:'100vh'
  }

  const sxOptionsBoxLogo = {
    width:'400px',
    height:'500px',
    display:'inline-block',
    margin:'70px 0'
  }


  return (
      <Grid wrap='nowrap' container sx={sxOptiOptionsContainer}>
        {showChatList()}
        {showConversation()}
        {showLogo()}
      </Grid>
  )
}