import React from 'react';
import Home from "./pages/Home"
import { ThemeProvider } from '@material-ui/styles';
import Signin from "./pages/Signin"
import{ BrowserRouter } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom'

import theme from "./theme"
function App() {
  const url = window.location.href
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
