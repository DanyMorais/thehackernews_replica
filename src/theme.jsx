import { createTheme } from "@mui/material/styles";
import { green, blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500]
    },
    secondary: {
      main: blueGrey[700]
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "15px",
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

export default theme;
