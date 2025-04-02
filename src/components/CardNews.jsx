import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const CardNews = ({ article }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia component="img" height="140" image={article.urlToImage} alt={article.title} />
      <CardContent>
        <Typography variant="h6">{article.title}</Typography>
        <Typography variant="body2" color="text.secondary">{article.description}</Typography>
        <Button size="small" href={article.url} target="_blank">Ler mais</Button>
      </CardContent>
    </Card>
  );
};

export default CardNews;
