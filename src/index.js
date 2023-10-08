//1. Import Area
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider, createTheme } from '@mui/material'
// -------------------------------
function goni(){
  return  "red"
}
let clr = goni()
// ----------------------------------
let clr3 = '#C70039'
export const ThemeProvider2 = createContext()
/*=================================*/
const theme = createTheme({
  palette: {
    primary: {
      main: '#00FFFF',
    }
  },
});
/*=================================*/

// 2. Define Area
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeProvider2.Provider value={clr3}>
         <App mycolor={clr}/>
      </ThemeProvider2.Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// 3. Export Area
reportWebVitals();
