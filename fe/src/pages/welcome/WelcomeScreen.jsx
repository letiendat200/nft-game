import "../bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function WelcomeScreen() {
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
             Please sign in to Metamask first
             </Typography>
             <Typography variant="h5" component="h2" gutterBottom>
               {'This web will only works if you have Metamask install on your browser'}
               
             </Typography>
           
             
             <Typography variant="body1"></Typography>
           </Container>
           </Box>
        </ThemeProvider>
       
       </>
 )
}
 export default WelcomeScreen;
