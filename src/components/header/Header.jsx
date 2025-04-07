import { Container, Button, Box, Link, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ bgcolor: '#3732b3', py: 2 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
            px: 2,
          }}
        >
          <Typography variant="subtitle1" color="white">Trendings</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Typography variant="body2" color="white">
              Followed by 5.20+ million
            </Typography>
            <Box>
              <IconButton color="inherit"><TwitterIcon /></IconButton>
              <IconButton color="inherit"><LinkedInIcon /></IconButton>
              <IconButton color="inherit"><FacebookIcon /></IconButton>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 3,
            px: 2,
            gap: isMobile ? 2 : 0,
          }}
        >
          <Link href="/" underline="none">
            <Box
              component="img"
              src="thehackernews.png"
              alt="The Hacker News Logo"
              sx={{ height: 50, width: { xs: 200, sm: 300, md: 435 } }}
            />
          </Link>
          <Button
            variant="contained"
            startIcon={<MailIcon />}
            sx={{
              backgroundColor: '#ffdb4d',
              color: 'black',
              fontWeight: 'bold',
              px: 3,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#ffcc00',
              },
            }}
          >
            Subscribe - Get Latest News
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
