// import React, { useContext } from 'react'
import React  from 'react' 
import { Box} from '@mui/material'
import BodyPartImage from '../components/BodyPartImage'
import { ScrollMenu} from 'react-horizontal-scrolling-menu'
// import leftArrow from '../assets/leftArrow.png'
// import rightArrow from '../assets/rightarrow.png'
import ExerciseCard from '../components/ExerciseCard'




// const LeftArrow = () => {
//     const { scrollPrev } = useContext(VisibilityContext);
//     return (
//         <Typography 
//         className="right-arrow">
//             <img src={leftArrow}  alt="right-arrow"    onClick={() => scrollPrev()}  style={{ margin: "0px 80px", width: "80px", height: "50px" }} /> 
//         </Typography>
//     );
// };

// const RightArrow = () => {
//     const { scrollNext } = useContext(VisibilityContext);
//     return (
//         <Typography      onClick={() => scrollNext()} 
//         className="left-arrow">
//             <img src={rightArrow} alt="right-arrow"  style={{ width: "80px", height: "50px",cursor:"pointer" }} />
//         </Typography>
//     );
// };

function HorizontalScrollBar({ data, setBodyPart, bodyPart ,isBodyParts}) {
    return (
        
            <ScrollMenu>
            {
                data.map((item) => (
                    <Box
                        key={item.id || item}
                        itemID={item.id || item}
                        title={item.id || item}
                        sx={{m:{lg:"0px 40px",xs:"0px 15px"}}}
                    >
                      
                        {isBodyParts ? <BodyPartImage data={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
                       
                    </Box>

                )

                )};
                    
        </ ScrollMenu>

    )
}

export default HorizontalScrollBar
