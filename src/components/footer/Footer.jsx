import { Container, List, Typography, Box, Button, Link } from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

import React from 'react'

function Footer() {
    return (
        <Container maxWidth='xl' sx={{ 
            bgcolor: '#d6ddee', margin: '0 auto', paddingLeft:'115px', paddingRight:'115px' 
        }}>
            <Typography sx={{ textAlign: 'center', fontSize: '18px', paddingTop: '20px'}}>
                Connect with us!
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '35px'}}>
                <Link href="https://x.com/thehackersnews" sx={{ display:'flex', flexDirection: 'column'}}><TwitterIcon fontSize='large'/>925,500 Followers</Link>
                <Link href="https://www.linkedin.com/company/thehackernews/"><LinkedInIcon fontSize='large'/>636,000 Followers</Link>
                <Link href="https://www.youtube.com/c/thehackernews?sub_confirmation=1"><YouTubeIcon fontSize='large'/>25,500 Subscribers</Link>
                <Link href="https://www.instagram.com/thehackernews/"><InstagramIcon fontSize='large'/>145,000 Followers</Link>
                <Link href="https://www.facebook.com/thehackernews"><FacebookIcon fontSize='large'/>1,890,500 Followers</Link>
                <Link href="https://t.me/+wKrQxniFO1Q1OTRk"><TelegramIcon fontSize='large'/>147,200 Subscribers</Link>
            </Box>
            <Box>
                <Box></Box>
                <List></List>
            </Box>
            <Typography sx={{
                fontSize: '11px', 
                color: '#505C7C', 
                padding: '5px 0 0', 
                borderTop: '2px solid #e2e7fd', 
                marginTop: '20px'
            }}>
                © The Hacker News, 2025. All Rights Reserved.
            </Typography>
        </Container>
    )
}

export default Footer
