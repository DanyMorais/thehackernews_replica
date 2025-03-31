import { Container, Button, Box, Link, Typography, TextField, IconButton } from '@mui/material';
import * as React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../../index.css'
import { blue } from '@mui/material/colors';

export default function Header() {
  return (
    <Container maxWidth='xl' sx={{bgcolor:'blue'}}>
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'row'
        }}> 
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <Typography>Followed by 5.20+ million</Typography>
            <IconButton><TwitterIcon /></IconButton>
            <IconButton><LinkedInIcon /></IconButton>
            <IconButton><FacebookIcon /></IconButton>
        </Box>
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'row'
        }}>
            <Link href="#"><img src='thehackernews.png' alt='The Hacker News Logo' /></Link>
            <Button variant='contained' startIcon={<MailIcon />}
                sx={{backgroundColor:'#fdd835', 
                    color:'black', 
                    padding:'10px', 
                    margin:'25px'
                }}
            >
                Subscribe - Get Latest News
            </Button>
        </Box>
    </Container>
  );
}
