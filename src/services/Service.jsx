import axios from "axios";

const API_KEY = "54d4872906234620a6c95d6331cc8b5b";
const BASE_URL = "https://newsapi.org/v2/everything?q=cybersecurity";

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};
