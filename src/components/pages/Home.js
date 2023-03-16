import React from 'react';
import { Box, Typography, Button, Grid, Paper, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

import { useAuth0 } from "@auth0/auth0-react";
import '../Main.css'
import Card from '../Card';




const Home = () => {

  const { isAuthenticated, user } = useAuth0();

  return (
    
    <Box>

        <Typography ml='50px' mt='70px'> { isAuthenticated && <Typography variant='h4' sx={{ fontFamily: 'Pacifico' }}> Welcome <span style={{fontWeight: 'bolder'}}> {user.name} </span> </Typography> }
        </Typography>

        <Typography class='what' color='#4E4BDC' mt='100px' ml={6} mb={3} sx={{ fontSize: { lg:'85px', xs: '50px'} }}>
            What is Aimetric?
        </Typography>
        <Typography variant='h5' ml={3}>
       <Typography class='dear' sx={{fontWeight: 'bolder', fontSize: { lg: '45px', xs: '40px'}}}> Dear Students: </Typography> <br />
         <Typography class='para' sx={{ fontSize: { lg: '30px', xs: '20px'}}}> We are delighted to intoduce you to AIMETRIC ,where we lessen your energy consumption to arrange your time. Whether you are beginning or continuing your hustle journey with us, we look forward to learning, exploring, and growing together .You can trust us, you will find unlimited opportunities for growth here at AIMETRIC. As a platform dedicated to servicing the next generation of contributors and leaders, we are excited to invest in your future, and to partner with you as you pursue your dreams. </Typography>
        </Typography>

        <Button
        component={Link} to='https://www.figma.com/proto/vz5r1cCJcqsS3X0RkYKkoM/AIMETRIC?node-id=117%3A2614&scaling=scale-down&page-id=0%3A1&starting-point-node-id=77%3A1428&show-proto-sidebar=1' target="_blank"
        sx={{ mt: '20px',width:"20%",borderRadius:"50px",border:"2px solid black", fontFamily: 'Oswald', background: '#ffffff', padding: '1%', left: '40%', color: 'black', cursor: 'pointer', fontSize: '18px', ":hover": { background: 'linear-gradient(#4E4BDC, #7367EE)' ,color:'white',border:"2px solid white",width:"30%",left: '35%', fontSize: '22px'}}} >
          How it works
        </Button>


        <Typography color='#4E4BDC' mt={10} ml={10} class='ofer'>
          <Typography class='offer' color='#4E4BDC' sx={{ fontSize: {lg: '85px', xs: '50px'} }}> What we offer? </Typography> <br />
        </Typography>
      {/* <Grid container >
        <Grid item xs>
        <Typography variant='h2' ml={5} >
          <SendIcon sx={{ width: '38px', height: '38px' }} />
          <span style={{ fontSize: '55px', color: '#7367EE', fontFamily: 'fantasy' }}> SHORT TERM GOAL</span> : <span style={{ fontSize: '55px', fontFamily: 'serif' }}> Tracking day to day activities to meet the deadlines on time. </span>
        </Typography>
        </Grid>
        <Divider orientation='vertical' flexitem />
        <Paper variant='outlined' square sx={{ p: 4, margin: '70px', height: 110 , maxWidth: 180, backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#4E4BDC', mt: '20px', ml: '30px' }} >
            <Grid item xs>
              <Button variant='text' component={Link} to='/addtask' color='secondary' sx={{ fontSize: '25px', fontWeight: 'bolder', color: 'white' }}>
                Tasks
              </Button>
            </Grid>
          </Paper>

      </Grid>

      <Grid container >
        <Grid item xs>
        <Typography mt={3} variant='h2' ml={5}>
          <SendIcon sx={{ width: '38px', height: '38px' }} /> 
          <span style={{ fontSize: '55px', color: '#7367EE', fontFamily: 'fantasy' }}> LONG TERM GOAL</span> : <span style={{ fontSize: '55px', fontFamily: 'serif' }}> Building your better self by tracking habits for a longer period of time to achieve a remarkable change in your lives. </span>
        </Typography>
        </Grid>
        <Divider orientation='vertical' flexitem />
        <Paper variant='outlined' square sx={{ p: 4, margin: '70px', height: 110 , maxWidth: 220, backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#4E4BDC', mt: '70px', ml: '30px' }} >
            <Grid item xs>
              <Button variant='text' component={Link} to='/calender' sx={{ fontWeight: 'bolder', fontSize: '25px', color: 'white',  }}>
                Calender
              </Button>
            </Grid>
          </Paper>

      </Grid>

      <Grid container >

        <Grid item xs>
        <Typography mt={10} variant='h2' ml={5} >
          <SendIcon sx={{ width: '38px', height: '38px' }} /> 
          <span style={{ fontSize: '55px', color: '#7367EE', fontFamily: 'fantasy' }}> BUDGET TRACKER</span> : <span style={{ fontSize: '55px', fontFamily: 'serif' }}> Mindful tracking of your daily expenses and avoiding thrift spending will help you become a rational individual. </span>
        </Typography>
        </Grid>
        <Divider orientation='vertical' flexitem />
        <Paper variant='outlined' square sx={{ p: 4, margin: '70px', height: 138 , maxWidth: 206, backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#4E4BDC', mt: '110px', ml: '30px', ":hover" : { backgroundColor:'#7367EE' } }} >
            <Grid item xs>
              <Button variant='text' component={Link} to='/budget' color='secondary' sx={{ fontSize: '25px', fontWeight: 'bolder', color: 'white', textAlign: 'center', p: '0 0 3px 0' }}>
                Budget Tracker
              </Button>
            </Grid>
          </Paper>

      </Grid> */}

      <Card />

    </Box>
  )
}

export default Home;