import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import hoge from '@material-ui/core/colors/blueGrey'

import MainContent from './MainContent'
import MyAppBar from './MyAppBar'
const theme = createMuiTheme({
  palette: {
    primary: hoge,
  },
  typography: {
    fontFamily: [
      'Noto Sans',
      'sans-serif',
    ].join(','),
    fontSize: 12,
    h1: {
      fontSize: "1.75rem"
    },
    h2: {
      fontSize: "1.5rem"
    },
    h3: {
      fontSize: "1.25rem"
    },
    h4: {
      fontSize: "1.125rem"
    },
    h5: {
      fontSize: "1rem"
    },
    h6: {
      fontSize: "1rem"
    },
  }
});

function App() {
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <MyAppBar />
      <MainContent />
    </MuiThemeProvider>
  );
}

export default App;