import React from 'react';
import {
  Container,
  Typography,
  Box,
  Link,
  Grid
} from '@mui/material';

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
  const socialLinks = [
    {
      icon: <TwitterIcon fontSize="large" />,
      label: '925,500 Followers',
      href: 'https://x.com/thehackersnews'
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      label: '636,000 Followers',
      href: 'https://www.linkedin.com/company/thehackernews/'
    },
    {
      icon: <YouTubeIcon fontSize="large" />,
      label: '25,500 Subscribers',
      href: 'https://www.youtube.com/c/thehackernews?sub_confirmation=1'
    },
    {
      icon: <InstagramIcon fontSize="large" />,
      label: '145,000 Followers',
      href: 'https://www.instagram.com/thehackernews/'
    },
    {
      icon: <FacebookIcon fontSize="large" />,
      label: '1,890,500 Followers',
      href: 'https://www.facebook.com/thehackernews'
    },
    {
      icon: <TelegramIcon fontSize="large" />,
      label: '147,200 Subscribers',
      href: 'https://t.me/+wKrQxniFO1Q1OTRk'
    }
  ];

  return (
    <Box sx={{ bgcolor: '#d6ddee', mt: 4, pt: 4 }}>
      <Container maxWidth="xl">
        <Typography variant="h6" align="center" gutterBottom>
          Connect with us!
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ my: 2 }}>
          {socialLinks.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
              <Link
                href={item.href}
                target="_blank"
                underline="none"
                color="inherit"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  '&:hover': { color: '#000' }
                }}
              >
                {item.icon}
                <Typography variant="body2">{item.label}</Typography>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ borderTop: '2px solid #e2e7fd', mt: 4, pt: 2 }}>
          <Typography variant="caption" display="block" align="center" color="#505C7C">
            © The Hacker News, 2025. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
