import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#EF3F0C',
    },
    secondary: {
      main: '#0A1930',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: '4rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '3rem',
    },
    h3: {
      fontSize: '2.5rem',
    },
    h4: {
      fontSize: '2rem',
    },
    subtitle1: {
      fontSize: '1.5rem',
      fontWeight: 300,
      lineHeight: 1.3,
    },
  },
  darkBlue: '#0a1930',
  lightBlue: '#1f93ff',
  colorWhite: '#fff',
  colorDark: '#333',
  colorGrey: '#eee',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  colorPurple: '#9d0191',
  colorOrange: '#ff7722',

  colorPrimary: '#007bff',
  colorSuccess: '#28a745',
  colorDanger: 'orangered',
  fwBold: 600,
  fwThin: 200,
  // status: {
  //   danger: orange[500],
  // },
})

export default theme
