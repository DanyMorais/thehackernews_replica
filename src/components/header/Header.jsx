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
    <Container maxWidth='xl' sx={{bgcolor:'#3732b3', maxHeight:'106px'}}>
        <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft:'115px',
            paddingRight:'115px'
        }}> 
            <Typography variant='h6'>Trendings</Typography> 
            <Box sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography>Followed by 5.20+ million</Typography>
                    <Box>
                    <IconButton><TwitterIcon /></IconButton>
                    <IconButton><LinkedInIcon /></IconButton>
                    <IconButton><FacebookIcon /></IconButton>
                </Box>
            </Box>
        </Box>
        <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft:'115px',
            paddingRight:'115px'
        }}>
            <Link href="/"><img src='thehackernews.png' alt='The Hacker News Logo' height={50} width={435}/></Link>
            <Button variant='contained' startIcon={<MailIcon />}
                sx={{backgroundColor:'#ffdb4d', 
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
