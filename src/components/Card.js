import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Box, Button } from '@mui/material'
import { Link } from "react-router-dom";

import Img1 from '../assets/1.png';
import Img2 from '../assets/2.png';
import Img3 from '../assets/3.png';
// import Img4 from '../assets/AIMETRIC.jpeg';

const Card = () => {
    const [flip, setFlip] = useState(false);
    const [flip1, setFlip1] = useState(false);
    const [flip2, setFlip2] = useState(false);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <ReactCardFlip isFlipped={flip}
            flipDirection="vertical">
            <div onMouseOver={() => setFlip(!flip)} style={{
                width: '300px',
                height: '200px',
                background: '#5451D6',
                fontSize: '40px',
                color: 'white',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px',
                alignItems: 'center',
                display: 'flex',
                // paddingTop: '70px',
                fontFamily: 'Oswald',
                flexDirection: 'column'
            }}>
            <img src={Img2} alt="task" width={120} />
            Add Your Tasks
                <br />
                <br />
                {/* <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }} onClick={() => setFlip(!flip)}>
                    Flip</button> */}
            </div>
            <div onMouseLeave={() => setFlip(!flip)} style={{
                width: '300px',
                height: '200px',
                background: '#7367EE',
                fontSize: '40px',
                color: 'white',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px',
                fontFamily: 'Oswald'
            }}>
                Short Term Goal
                <br />
                <Button component={Link} to="/addtask" variant="outlined" sx={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '15px',
                    fontFamily: 'Oswald'
                }}>
                    Task</Button>
            </div>

        </ReactCardFlip>

        <ReactCardFlip isFlipped={flip1}
            flipDirection="vertical">
            <div onMouseOver={() => setFlip1(!flip1)} style={{
                width: '300px',
                height: '200px',
                background: '#5451D6',
                fontSize: '40px',
                color: 'white',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '5px',
                alignItems: 'center',
                display: 'flex',
                fontFamily: 'Oswald',
                flexDirection: 'column'
            }}>
            <img src={Img1} width={120} />
                Add To Calendar
                <br />
                <br />
                {/* <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px', 
                    cursor: 'pointer'
                }} onClick={() => setFlip1(!flip1)}>
                    Flip</button> */}
            </div>
            <div onMouseLeave={() => setFlip1(!flip1)} style={{
                width: '300px',
                height: '200px',
                background: '#7367EE',
                fontSize: '40px',
                color: 'white',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px',
                fontFamily: 'Oswald'
            }}>
                Long Term Goal
                <br />
                <Button component={Link} to="/calender" variant="outlined" sx={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '15px',
                    fontFamily: 'Oswald'
                }}>
                    Calendar</Button>
            </div>

        </ReactCardFlip>

        <ReactCardFlip isFlipped={flip2}
            flipDirection="vertical">
            <div onMouseOver={() => setFlip2(!flip2)} style={{
                width: '300px',
                height: '200px',
                background: '#5451D6',
                fontSize: '35px',
                color: 'white',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '5px',
                alignItems: 'center',
                display: 'flex',
                fontFamily: 'Oswald',
                flexDirection: 'column'
            }}>
            <img src={Img3} alt="task" width={120} />
                Manage Your Budget
                <br />
                <br />
                {/* <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }} onClick={() => setFlip2(!flip2)}>
                    Flip</button> */}
            </div>
            <div onMouseLeave={() => setFlip2(!flip2)} style={{
                width: '300px',
                height: '200px',
                background: '#7367EE',
                fontSize: '40px',
                color: 'white',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px',
                fontFamily: 'Oswald'
            }}>
                Budget Tracker
                <br />
                <Button component={Link} to="/budget" variant="outlined" sx={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '15px',
                    fontFamily: 'Oswald'
                }}>
                    Budget</Button>
            </div>

        </ReactCardFlip>
        </Box>
    );
}

export default Card