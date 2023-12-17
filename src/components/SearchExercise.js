import React, { useState, useEffect } from 'react'
import { Box, Stack, Button, Typography, TextField } from '@mui/material'

import { options, fetchData } from '../utils/fetch'
import HorizontalScrollBar from '../components/HorizontalScrollBar'


function SearchExercise({setExercise, bodyPart ,setBodyPart}) {
  const [search, setSearch] = useState('');
  const[bodyParts,setBodyParts]=useState([]);
 

  useEffect(()=>{
    const fetchExerciseData=async()=>{
      const bodyPartList=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`, options)
      
        setBodyParts(['all', ...bodyPartList ]);
    }  
           fetchExerciseData();
  },[])


  const handleClick = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=200', options);
    
      const searchedExercise=exerciseData.filter((exercise)=>
        exercise.name.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)||
        exercise.equipment.toLowerCase().includes(search)||
        exercise.target.toLowerCase().includes(search)
    );
     
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercise(searchedExercise);
     
    }
    
  }

  return (
    <Stack alignItems="center" justifyContent="center">
      <Typography fontWeight="700" sx={{ fontSize: { lg: "44px", xs: "30px" } }}>Search some awesome Exercise </Typography>
      <Box position="relative" mt="25px">

        <TextField
          placeholder='Search Exercise'
          type="text"
          onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
          value={search}
          border="none"
          sx={{
            input: {
              fontWeight: "600",
              fontSize: "20px"
            },
            border: "none",
            width: { xs: "350px", lg: "900px" },
            borderRadius: "10px"

          }}></TextField>
        <Button className="search-btn"
          sx={{
            position: "absolute",
            color: "white",
            border: "none",
            backgroundColor: "#FF2625",
            width: { lg: "150px", xs: "90px" },
            fontSize: { lg: '15px', xs: '10px' },
            height: "63px",
            right: "0",
            fontWeight: "700"
          }}
          onClick={handleClick}>
          Search</Button>
      </Box>
      <Box sx={{position:"relative",width:"100%",p:"50px"}}>

        <HorizontalScrollBar  data={bodyParts} isBodyParts  bodyPart={bodyPart} setBodyPart={setBodyPart}/>

      </Box>
    </Stack>
  )
}

export default SearchExercise
