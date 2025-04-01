import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, blueGrey } from "@mui/material/colors";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Appbar from './components/header/Appbar.jsx'
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Body from './components/body/Body.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3732b3',
    },
    secondary: {
      main: '#555555',
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    color: '#555555',
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
  },
});


export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters maxWidth='xl'>
        <Header />
        <Appbar />
        <Body />
        <Footer />
      </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
