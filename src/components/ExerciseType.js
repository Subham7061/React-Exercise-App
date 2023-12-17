import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { options, fetchData } from '../utils/fetch'
import ExerciseCard from '../components/ExerciseCard'
import Loader from '../components/Loader'


function ExerciseType({ setExercise, bodyPart, exercise }) {

  const [currentPage, setCurrentPage] = useState(1)
  const [exercisePerPage] = useState(7);


  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOffirstExercise = indexOfLastExercise - exercisePerPage;
  // const currentExercise = exercise.slice(indexOffirstExercise, indexOfLastExercise)
  const currentExercise = Array.isArray(exercise) ? exercise.slice(indexOffirstExercise, indexOfLastExercise) : [];


  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" })
  }

  useEffect(() => {
    const fetchedExerciseData = async () => {
      let exerciseData = [];
      if (bodyPart === "all") {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=200', options);
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,options);
      }
      setExercise(exerciseData);
    }

    fetchedExerciseData();

  },[bodyPart])

  if(!currentExercise.length)return <Loader/>

  return (

    <Box id="exercise"
      mt="60px"
      p="20px"
      sx={{ mt: { lg: "110px" } }}>
      <Typography variant="h3" mb="90px">Showing results..</Typography>
         
      <Stack direction="row"
        flexWrap={"wrap"}
        justifyContent={"center"}
        sx={{ gap: { lg: "100px", xs: "50px" } }}>

        {currentExercise.map((element, index) => (
          <ExerciseCard exercise={element} key={index} />

        ))};
      </Stack>
      <Stack mt="50px" alignItems={"center"} sx={{ ml: { lg: "110px", xs: "50px" } }}>

        <Pagination
          color="standard"
          shape="rounded"
          defaultPage={2}
          count={Math.ceil(exercise.length / exercisePerPage)}
          onChange={paginate}
          page={currentPage}
          size="large"

        />


      </Stack>


    </Box>

  )
}

export default ExerciseType
