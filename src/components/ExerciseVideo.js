import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import Loader from '../components/Loader'

function ExerciseVideo({ exerciseVideoData, exerciseName }) {
  
  if (exerciseVideoData.length === 0) return <div><Loader/></div>
  return (
    <Box mt="200px">
      <Typography mb="60px" sx={{ fontSize: { lg: "50px", xs: "30px" }, fontWeight: { lg: "700", xs: "900" }, ml: { lg: "10px", xs: "20px" } }} >Youtube Videos for <span style={{ color: "#ff2625" }}>{exerciseName}</span>  Exercise </Typography>
      <Stack className="youtubeVideo" sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center" >
        {
          exerciseVideoData?.slice(0, 3)?.map((item, index) => (

               <Box bgcolor="#FAF8F1" style={{height:"28rem",borderRadius:"20px"}}>
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img style={{borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}} src={item.video.thumbnails[0].url} alt={item.video.title}  backgroundColor="#ff2625"/>
              <Box  ml="15px">
                <Typography sx={{ fontSize: { lg: '25px', xs: '18px' } }} fontWeight={400} color="#191919">
                  {item.video.title}
                </Typography>
                <Typography fontSize="16px" fontWeight="700" color="#3D30A2">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
            </Box> 
          ))
        }

      </Stack>

    </Box>
  )
}

export default ExerciseVideo
