import { Grid, useMediaQuery } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from 'src/components/layout'
import { LogoMessage } from 'src/components/molecules'
import { Form } from 'src/components/organisms'

const Home: NextPage = () => {

  const isMobile = useMediaQuery('(max-width:600px)');

  const sxOptions = {
    margin: (isMobile) ? '32px 16px' : '0 115px',
    flexWrap: (isMobile) ? 'wrap' : 'nowrap',
  }

  return (
    <div>
      <main>
        <Layout>
          <Grid container sx={sxOptions}>

            <Grid item md={6}>
              <Form title='Bienvenido' />
            </Grid>

            <Grid item md={6} order={isMobile ? (-1) : (1)}>
              <LogoMessage title='Bienvenidos al chat' text='Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte.' />
            </Grid>

          </Grid>
        </Layout>
      </main>
    </div>
  )
}

export default Home
