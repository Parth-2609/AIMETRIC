import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box mt={7} height={250} width="100%" sx={{ backgroundColor: '#7367EE' }}>
      <Grid container justifyContent="center" spacing={2}>

        <Grid item mr={30} >
          <Typography color="white" sx={{ fontSize: '46px', fontWeight: 'bold' }}> AIMETRIC <br /> </Typography>
          <Typography color="white" sx={{ fontSize: '30px' }}> Desire to Aspire </Typography>
        </Grid>

        <Grid item mr={35}>
          <Typography color="white" sx={{ fontSize: '35px' }}> Connect at 
          <Button sx={{ color: 'white' }} component={Link} to="https://www.linkedin.com/" target="_blank">
          <LinkedInIcon sx={{ height: '37px', width: '37px' }} /> 
          </Button>
          </Typography> 
        </Grid>

        <Grid item>
          <Typography color="white" sx={{ fontSize: '35px' }}>
            Call us <br /> +91-1234567890
          </Typography>
        </Grid>
      </Grid>
      <hr />
    </Box>
  )
}

export default Footer