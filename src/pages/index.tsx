import { Grid, useMediaQuery } from '@mui/material'
import type { NextPage } from 'next'
import { LogoMessage } from 'src/components/molecules'
import { Form } from 'src/components/organisms'

const Home: NextPage = () => {

  const isMobile = useMediaQuery('(max-width:600px)');

  const sxOptions = {
    margin: (isMobile) ? '32px 16px' : '200px 16px 200px 16px',
    flexWrap: (isMobile) ? 'wrap' : 'nowrap',
  }

  return (
    <div>
      <main>
        <Grid container sx={sxOptions}>

          <Grid item md={6}>
            <Form title='Bienvenido' />
          </Grid>

          <Grid item md={6} order={isMobile ? (-1) : (1)}>
            <LogoMessage title='Bienvenidos al chat' text='Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte.' />
          </Grid>

        </Grid>
      </main>
    </div>
  )
}

export default Home
