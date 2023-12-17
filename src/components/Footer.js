import React from 'react'
import {Box ,Stack,Typography} from '@mui/material'
import Logo from '../assets/logo.jpg'

function Footer() {
  return (
    <Box  mt="80px" bgcolor="#FFF3F4">
    <Stack gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="30px" textAlign="center" pb="20px">Made with ❤️ by Subham Yadav</Typography>
    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '15px' } }} mt="20px" textAlign="center" pb="20px">All  rights are reserved  under @subhamyadav.com</Typography>
  </Box>
  )
}

export default Footer
