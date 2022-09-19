import { Box, Grid, useMediaQuery } from '@mui/material'
import { display } from '@mui/system';
import React from 'react'

interface LayoutProps {
  children: React.ReactElement
}

export const Layout = ({ children }: LayoutProps) => {

  const isMobile = useMediaQuery('(max-width:600px)');

  const sxOptions = {
    width: '100vw',
    maxWidth: '100vw',
    height: '100vh',
    background: 'var(--color-blue-gradient)',
    backgroundColor: 'var(--color-purple-100)',
  }

  if (isMobile) {
    return (
      <Grid container>
        {children}
      </Grid>
    )
  }

  return (
    <Box sx={sxOptions}>
      <Grid
        sx={{
          height: '10%',
          maxHeight: '130px',
          width: '100vw',
          backgroundColor: 'var(--color-purple-800)'
        }}>

      </Grid>
      <Grid sx={{
        backgroundColor: 'var(--color-white)',
        position: 'absolute',
        margin: 'auto',
        height: 'calc(100% - 64px)',
        width: 'calc(100% - 200px)',
        top: '32px',
        left: '5%',
        right: '5%',
        alignItems: 'center',
        display: 'flex'
      }}>
        {children}
      </Grid>
    </Box>
  )
}
