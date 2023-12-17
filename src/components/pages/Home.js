import { Box } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import HomePage from '../HomePage'
import SearchExercise from '../SearchExercise'
import ExerciseType from '../ExerciseType'

function Home() {

  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HomePage />
      <SearchExercise setExercise={setExercise} bodyPart={bodyPart} setBodyPart={setBodyPart} />

      <ExerciseType setExercise={setExercise} bodyPart={bodyPart} exercise={exercise} />

    </Box>
  )
}

export default Home
