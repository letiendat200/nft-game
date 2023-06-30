
import "../bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectActions } from "../../Store/connect";
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function HomeScreen() {
  
  const dispatch = useDispatch(connectActions);
  const {ethereum} = window;
 
  const checkConnection = async () =>{
    if(ethereum.isConnected()){
      dispatch(connectActions.updateStatusSignin());    
    }
    else{
      dispatch(connectActions.updateStatusSignout()); 
    }
  } 
  
  useEffect(() => {
    checkConnection();
  },[])
  const defaultTheme = createTheme();
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
          You have signed in to Metamask
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'Here you can play games to earn BNB'}
            
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
          {'Or visit the auction page and NFT shop to get your own NFT'}
          </Typography>
          
          <Typography variant="body1"></Typography>
        </Container>
        </Box>
     </ThemeProvider>
    
    </>
 )
  
}

export default HomeScreen;