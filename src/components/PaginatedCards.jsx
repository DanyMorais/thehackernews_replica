import React, { useState, useEffect } from "react";
import { Grid, Pagination, Box, CircularProgress } from "@mui/material";
import CardNews from "./CardNews"; // Componente do card

const PaginatedCards = ({ articles }) => {
  const [page, setPage] = useState(1); // Página atual
  const articlesPerPage = 10; // Cards por página

  // Função para mudar de página
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  // Garantir que articles seja um array
  const currentArticles = Array.isArray(articles) ? articles.slice((page - 1) * articlesPerPage, page * articlesPerPage) : [];

  if (!Array.isArray(articles)) {
    return <CircularProgress sx={{ display: 'block', margin: 'auto', marginTop: 4 }} />;
  }

  return (
    <Box>
      {/* Grid de Cards */}
      <Grid container spacing={2} justifyContent="center">
        {currentArticles.length > 0 ? (
          currentArticles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardNews article={article} />
            </Grid>
          ))
        ) : (
          <Typography variant="body2" sx={{ textAlign: 'center', width: '100%' }}>
            Nenhuma notícia disponível.
          </Typography>
        )}
      </Grid>

      {/* Paginação */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={Math.ceil(articles.length / articlesPerPage)} // Calcula quantas páginas de 10 artigos temos
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default PaginatedCards;
