import { useEffect, useState } from "react";
import { fetchNews } from "../services/Service.jsx";
import CardNews from "../components/CardNews";
import PaginatedCards from "../components/PaginatedCards.JSX";
import { Container, Grid, Typography } from "@mui/material";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews().then(setNews);
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 4 }}>Últimas Notícias de Cibersegurança</Typography>
      <Grid container spacing={2}>
        {news.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <CardNews article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
