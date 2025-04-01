import { Container, List, Typography, Box } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Container maxWidth='xl' sx={{ bgcolor: '#cfe8fc', paddingLeft:'115px', paddingRight:'115px' }}>
            <Typography>Connect with us!</Typography>
            <Box></Box>
            <Box>
                <Box></Box>
                <List></List>
            </Box>
            <Typography>© The Hacker News, 2025. All Rights Reserved.</Typography>
        </Container>
    )
}

export default Footer
