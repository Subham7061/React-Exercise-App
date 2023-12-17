import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollBar from '../components/HorizontalScrollBar'
import Loader from '../components/Loader'


function SimilarExercise({ exerciseTargetMuscle, exerciseEquipment }) {
  return (
    <Box mt="140px">
      <Typography ml="20px" sx={{ fontSize: { lg: "50px", xs: "25px" }, fontWeight: { lg: "700", xs: "900" }, ml: { lg: "10px", xs: "20px" } }}>Similar <span style={{textTransform:"capitalize",color:"#ff2625"}}> Target muscle</span> Exercises</Typography>
      <Stack mb="140px" justifyContent={"center"} gap="50px" sx={{ mt: { lg: "50px", xs: "20px" } }}>
        {exerciseTargetMuscle.length!==0? ( <Box sx={{ overflowX: 'auto' }}> <HorizontalScrollBar data={exerciseTargetMuscle} /></Box>) :(<Loader/>)}
      </Stack>
      <Typography  sx={{ fontSize: { lg: "50px", xs: "25px" }, fontWeight: { lg: "700", xs: "900" }, ml: { lg: "10px", xs: "20px" } }}>Similar <span style={{color:"#ff2625",textTransform:"capitalize"}}>Equipment </span>Exercises</Typography>
      <Stack justifyContent={"center"} gap="50px" sx={{ mt: { lg: "50px", xs: "20px" }}}>
      {exerciseEquipment!==0?<HorizontalScrollBar data={exerciseEquipment}/>:<loader/>}
      </Stack>
   

    </Box>
  )
}

export default SimilarExercise
