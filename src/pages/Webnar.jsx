import { useEffect, useState } from "react";
import { fetchNews } from "../services/Service.jsx";
import { Container, Grid, Typography } from "@mui/material";

const Webnar = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews().then(setNews);
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 4 }}>Webnar</Typography>
    </Container>
  );
};

export default Webnar;
