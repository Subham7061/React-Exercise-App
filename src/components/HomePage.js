import React from 'react'
import { Stack, Typography } from '@mui/material'
import Banner from '../assets/gym.png'



function HomePage() {
  return (
    <Stack sx={{
      mt: { lg: "212px", xs: '70px', },
      ml: { sm: '50px' }
    }} position="relative" p="50px">
      <Typography color="#FF2625" fontWeight="600" fontSize="30px">Gym Club Center</Typography>
      <Typography mb="5px" mt="20px" fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '40px' } }}>Sweat, Smile <br></br>And Repeat</Typography>
      <Typography fontSize="19px" lineHeight="1" mt="20px" mb={2}>Lets do something better in life to be happy...</Typography>
      <Stack>
        <a href="#exercise"style={{
          marginTop: '45px', textDecoration: 'none',
          width: '200px', textAlign: 'center', background: '#FF2625',
          padding: '14px', fontSize: '22px', textTransform: 'none',
          color: 'white', borderRadius: '4px'
        }}>Explore Exercises</a>
      </Stack>
      <Typography fontWeight={700} color="#FF2625" fontSize="200px" sx={{ opacity: 0.1, display: { lg: "block", xs: "none", margin: "20px 250px" } }}>Exercise</Typography>
      <img src={Banner} alt="banner" className="hero-banner-img"  ></img>


    </Stack>

  )
}

export default HomePage
