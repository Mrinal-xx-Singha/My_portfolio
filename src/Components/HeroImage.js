import './HeroImageStyles.css'

import React from 'react'
import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'

const HeroImage = () => {
  return (
    <div className='hero'>
      <div className='mask'>
      </div>
      <Typography variant='h1' fontSize='4rem' >Hi I'M A WEB DEVELOPER</Typography>
      <Typography varient='h1'>REACT DEVELOPER</Typography>
      <Stack direction='row' justifyContent='center' alignItems='center' spacing={2} >
      <Button variant='contained' >PROJECTS</Button>
      <Button variant='contained'>CONTACT</Button>
      </Stack>
    </div>
  )
}

export default HeroImage
