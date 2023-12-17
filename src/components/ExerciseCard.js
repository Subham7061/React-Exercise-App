import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import '../App.css'


function ExerciseCard({ exercise }) {
  return (
    <Link className="exercise-card " to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt="{exercise.name}" Loading="lazy"></img>
        <Stack direction={"row"} gap="60px" justifyContent={'center'}>
          <Button sx={{ color: "#fff", backgroundColor: "#49108B", fontSize: "15px", fontWeight: "700", textTransform: "capitalize", width: "100px", borderRadius: "50px" }}> {exercise.bodyPart}</Button>
          <Button sx={{ color: "#fff", backgroundColor: "#0766AD", fontSize: "15px", fontWeight: "700", textTransform: "capitalize", width: "100px", borderRadius: "50px" }}> {exercise.target}</Button>
        </Stack>
        <Typography textAlign={"center"} mt="50px" sx={{ mt: "10px", fontWeight: "700", fontSize: "20px", color: "Black" }}>{exercise.name}</Typography>
    </Link>

  )
}

export default ExerciseCard
