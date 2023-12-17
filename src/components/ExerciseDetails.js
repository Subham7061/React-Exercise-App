import React from 'react'
import { Typography, Stack } from '@mui/material'
import Logo from '../assets/logo.jpg'

function ExerciseDetails({ exerciseDetail }) {

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  return (

    <Stack gap="60px" mt="-20px" sx={{ flexDirection: { lg: 'row' }, alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
      <Stack  sx={{ gap: { lg: '35px', xs: '20px' },textAlign:{xs:"center"} }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '22px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{color:"#ff2625", textTransform: 'capitalize' }}>{name}</span> is one
          of the best  exercises to target your {target}. It will help you improve your{' '}
           mood and gain energy.
        </Typography>
        <Stack direction={"row"}>
          <img src={Logo} alt="dumbell" style={{ width: "60px", height: "60px", margin: "0 10px" }} />
          <Typography sx={{ fontSize: { lg: "22px", xs: "18px" }, fontWeight: "700", color: "#872341" }} textTransform="capitalize" mt="10px" variant="h4">{bodyPart}</Typography>
        </Stack>
        <Stack direction={"row"}>
          <img src={Logo} alt="dumbell" style={{ width: "60px", height: "60px", margin: "0 10px" }} />
          <Typography sx={{ fontSize: { lg: "22px", xs: "18px" }, fontWeight: "700", color: "#3559E0" }} textTransform="capitalize" mt="10px" variant="h4">{target}</Typography>
        </Stack>
        <Stack direction={"row"}>
          <img src={Logo} alt="dumbell" style={{ width: "60px", height: "60px", margin: "0 10px" }} />
          <Typography sx={{ fontSize: { lg: "22px", xs: "18px" }, fontWeight: "700", color: "#ff2625" }} textTransform="capitalize" mt="10px" variant="h4">{equipment}</Typography>
        </Stack>


      </Stack>
    </Stack >


  )
}

export default ExerciseDetails

