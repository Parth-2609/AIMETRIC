import React from 'react';
import { Box, Typography } from '@mui/material';

import { useAuth0 } from "@auth0/auth0-react";


const Home = () => {

  const { isAuthenticated, user } = useAuth0();

  return (
    
    <Box>
        <Typography ml='50px' mt='70px'> { isAuthenticated && <Typography class='welcome' variant='h4'> Welcome <span class='welcome1' style={{fontWeight: 'bolder'}}> {user.name} </span> </Typography> }
        </Typography>
        {/* <Typography variant='h1' textAlign='center' mt='100px' alignContent='center'>
            This is the Home Page
        </Typography> */}
    </Box>
  )
}

export default Home;