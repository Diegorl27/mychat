import { Box, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { LogoMessage } from 'src/components/molecules'
import { ChatsList } from 'src/components/organisms'

export default function Home() {
  const isMobile = useMediaQuery('(max-width:600px)')

  const sxOptiOptionsContainer =  {
   maxWidth:'100%',
   MaxHeight:'100vh'
  }

  const sxOptionsBoxLogo = {
    width:'400px',
    height:'500px',
    display:'inline-block',
    margin:'100px 0'
  }

  return (
      <Grid wrap='nowrap' container sx={sxOptiOptionsContainer}>
        <ChatsList />
        {!isMobile && (<Grid item xs={12} textAlign='center'>
          <Box sx={sxOptionsBoxLogo}>
            <LogoMessage title='Bienvenidos al chat' text='Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte.'/>
          </Box>
        </Grid>)}
      </Grid>
  )
}
