import React, { useState } from 'react';
import Card from './components/Card'
import { ThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function App() {

  const [ darkMode, setDarkMode ] = useState();

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper> 
        <h1>PORTFOLIO</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <br />
        <FormControlLabel 
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="primary"
            />
          }
          label="Dark Mode"
        />
        <Card />
      </Paper>
    </ThemeProvider>
  )
}
