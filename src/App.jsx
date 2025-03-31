import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Appbar from './components/header/Appbar.jsx'
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Body from './components/body/Body.jsx';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth='xl'>
        <Header />
        <Appbar />
        <Body />
        <Footer />
      </Container>
    </React.Fragment>
  );
}
