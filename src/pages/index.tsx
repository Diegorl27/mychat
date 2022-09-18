import { Box, Card, Container, Grid, useMediaQuery } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Avataricons, Button, ChatImage, Icons, Input} from 'src/components/atoms'
import { Form, LogoMessage } from 'src/components/molecules'

const Home: NextPage = () => {

  const isMobile = useMediaQuery('(max-width:600px)');
  const sxOptions ={
    margin:(isMobile) ? '32px 16px':'200px 16px 200px 16px'
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Container maxWidth='lg'>
              <Grid container sx={sxOptions}>

                <Grid item md={6}>
                  <Form title='Bienvenido' />
                </Grid>

                <Grid item md={6} order={isMobile ? (-1) : (1)}>
                  <LogoMessage title='Bienvenidos al chat' text='Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte.' />
                </Grid>

              </Grid>
          </Container>
      </main>
    </div>
  )
}

export default Home
