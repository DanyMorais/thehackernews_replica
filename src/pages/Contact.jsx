import { useEffect, useState } from "react";
import { fetchNews } from "../services/Service.jsx";
import { Container, Grid, Typography } from "@mui/material";

const Contact = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews().then(setNews);
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 4 }}>Contact</Typography>
    </Container>
  );
};

export default Contact;
