import React from 'react'
import { Stack, Typography } from '@mui/material'
import dumbellImage from '../assets/dumbellimage.jpg'


function BodyPartImage({ data, setBodyPart, bodyPart }) {
    return (
        <Stack
       
            alignItems={"center"}
            justifyContent={"center"}
            type="button"
            className="body-part-img"
            sx={
                bodyPart === data ? {
                    borderTop: "2px solid #FF2625",
                    width: "260px",
                    height: "240px",
                    backgroundColor: "#ff2625",
                    borderBottomLeftRadius: "20px",
                    cursor: "pointer",
                    gap: "40px"
                } : {
                    width: "270px",
                    height: "260px",
                    backgroundColor: "#F3F8FF",
                    borderBottomLeftRadius: "20px",
                    cursor: "pointer",
                    gap: "40px"

                   }
            }
            onClick={() => {
                setBodyPart(data);
                
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
        >
            <img src={dumbellImage} alt="dumbell" style={{ width: "70px", height: "70px", marginTop: "20px" }} />
            <Typography fontSize="25px" fontWeight={700} color="#3f1212" textTransform={"capitalize"}>{data}</Typography>


        </Stack>
    )
}

export default BodyPartImage
