import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import ExerciseDetails from '../ExerciseDetails'
import ExerciseVideo from '../ExerciseVideo'
import SimilarExercise from '../SimilarExercise'
import { fetchData, options, youTubeOptions } from 'C:/Users/suraj/OneDrive/Desktop/web developement/React project/Gym website/gym/src/utils/fetch';
import Loader from '../Loader'



function Exercise() {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVideoData, setexerciseVideoData] = useState([]);
  const [exerciseTargetMuscles, setexerciseTargetMuscles] = useState([]);
  const [exerciseEquipment, setExerciseEquipment] = useState([]);
  const { id } = useParams();

  useEffect(() => {

    window.scrollTo({ top: 0, behavior: "smooth" });

    const exerciseDetails = async () => {
      const rapidDbUrl = "https://exercisedb.p.rapidapi.com"
      const youTubeUrl = "https://youtube-search-and-download.p.rapidapi.com"

      const exerciseDetailsData = await fetchData(`${rapidDbUrl}/exercises/exercise/${id}`, options);
      setexerciseDetail(exerciseDetailsData);


      const exerciseVideosData = await fetchData(`${youTubeUrl}/search?query=${exerciseDetailsData.name}`, youTubeOptions);
      setexerciseVideoData(exerciseVideosData.contents);


      const exerciseTarget = await fetchData(`${rapidDbUrl}/exercises/target/${exerciseDetailsData.target}`, options)
      setexerciseTargetMuscles(exerciseTarget);

      const exerciseTargetEquipment = await fetchData(`${rapidDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`, options)
      setExerciseEquipment(exerciseTargetEquipment);

    }
    <Loader/>
    exerciseDetails();

  }, [id]);


  if (!exerciseDetail) return <Loader/>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "50px" } }}>
      <ExerciseDetails exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideoData={exerciseVideoData} exerciseName={exerciseDetail.name} />
      <SimilarExercise exerciseTargetMuscle={exerciseTargetMuscles} exerciseEquipment={exerciseEquipment} />
    </Box>

  );
};

export default Exercise  
